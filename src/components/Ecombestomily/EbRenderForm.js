import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import EbDropDownInput from "./options/EbDropDownInput";
import EbSwatchInput from "./options/EbSwatchInput";
import EbTextInput from "./options/EbTextInput";
import { ebParseInt } from "../../assets/scripts/helpers";
import "./EbRenderForm.css";
import EbImageUploadInput from "./options/EbImageUploadInput";

function EbRenderForm(props) {
  console.log("props", props);
  const { sets } = props;
  sets.sort((a, b) => a.sort_id - b.sort_id);
  const watchGroup = groupOptionByWatchId(sets);
  const [state, setState] = useState({
    setsData: sets,
    formData: {},
  });

  useEffect(() => {
    const formDataInit = initFormData(sets);
    const updatedSetsData = initSetsData(sets, formDataInit);
    setState({
      formData: formDataInit,
      setsData: updatedSetsData,
    });
  }, [sets]);

  const { setsData, formData } = state;

  function handleChange(result) {
    const { optionId, value } = result;
    const newSetsData = updateSetsData(optionId, value);
    setState({
      ...state,
      setsData: newSetsData,
      formData: {
        ...formData,
        [optionId]: value,
      },
    });
  }

  function setHideVisually(whichSets, optionIds, optionValue) {
    optionIds.forEach((id) => {
      let searchOption = whichSets.find((option) => option.id === id);
      let conditions = searchOption.conditions;
      if (conditions.length) {
        let mainAction = conditions[0].action;
        const isMatchedCondition = checkConditions(conditions, optionValue);

        searchOption.hide_visually =
          (isMatchedCondition && mainAction === "hide") ||
          (!isMatchedCondition && mainAction === "show");
      }
    });
    return whichSets;
  }

  function updateSetsData(optionId, optionValue) {
    let template = [...setsData];
    if (optionId) {
      let existedWatch = watchGroup[optionId];
      if (existedWatch) {
        template = setHideVisually(template, existedWatch, optionValue);
      }
    }
    return template;
  }

  function initSetsData(rawSets, formDataInit) {
    for (const key in watchGroup) {
      const watchItem = watchGroup[key];
      let optionValue = formDataInit[key];
      rawSets = setHideVisually(rawSets, watchItem, optionValue);
    }
    return rawSets;
  }

  function initFormData(data) {
    let templateData = {};
    data.forEach((item) => {
      let found;
      if (item.type === "Swatch" || item.type === "Dropdown") {
        found = item.values.find((i) => i.selected === true);
        templateData[item.id] = found ? found.id : null;
      } else if (item.type === "Text Input") {
        templateData[item.id] = "abc";
      } else if (item.type === "Image Upload") {
        templateData[item.id] = "base64";
      } else {
      }
    });
    return templateData;
  }

  function groupOptionByWatchId(data) {
    const result = {};
    data.forEach((item) => {
      item.conditions.forEach((condition) => {
        if (!result[condition.watch_option]) {
          result[condition.watch_option] = new Set();
        }
        result[condition.watch_option].add(item.id);
      });
    });
    return result;
  }

  function checkConditions(conditions, value) {
    let result;
    value = ebParseInt(value);
    conditions.forEach((condition) => {
      result =
        condition.combination_operator === "and"
          ? result && value === condition.desired_value
          : result || value === condition.desired_value;
    });
    return result;
  }

  return (
    <div className="Ecombestomily">
      {setsData.map((input) => {
        const { id, type, hide_visually, values } = input;
        if (hide_visually || (values && values.length < 2)) {
          //hide option that only 1 value for setecting and hide_visually is True
          return null;
        }

        switch (type) {
          case "Swatch":
            return (
              <EbSwatchInput
                key={id || uuidv4()}
                name={id}
                onSelectionChange={handleChange}
                data={input}
              />
            );
          case "Text Input":
            return (
              <EbTextInput
                key={id || uuidv4()}
                name={id}
                onSelectionChange={(item) => console.log(item)}
                data={input}
              />
            );
          case "Dropdown":
            return (
              <EbDropDownInput
                key={id || uuidv4()}
                name={id}
                onSelectionChange={handleChange}
                data={input}
              />
            );
          case "Image Upload":
            return (
              <EbImageUploadInput
                key={id || uuidv4()}
                name={id}
                onSelectionChange={(item) => console.log(item)}
                data={input}
                showPreview={false}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default EbRenderForm;
