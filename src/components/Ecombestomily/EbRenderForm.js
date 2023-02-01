import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import EbDropDownInput from "./options/EbDropDownInput";
import EbSwatchInput from "./options/EbSwatchInput";
import EbTextInput from "./options/EbTextInput";
import "./EbRenderForm.css";
import EbImageUploadInput from "./options/EbImageUploadInput";
import EbCheckBoxInput from "./options/EbCheckBoxInput\u001D";

function EbRenderForm(props) {
  const { sets } = props;
  sets.sort((a, b) => a.sort_id - b.sort_id);
  const watchGroup = groupOptionByWatchId(sets);
  const [state, setState] = useState({});

  useEffect(() => {
    const initData = initSetData(sets);
    setState({
      setsData: initData,
      formData: {},
    });
  }, [sets]);

  // Hàm này sẽ filter data gốc và trả về mảng mới bằng cách bỏ những item có hide_visually = true và không có condition
  // Hàm này sẽ filter data gốc và lấy những item cần render ra theo formData
  function initSetData(sets) {
    let renderList = [];
    sets.forEach((item) => {
      if (
        !item.hide_visually &&
        (!item.conditions || item.conditions.length < 1)
      ) {
        renderList.push(item);
      } else {
        const optionIds = item.conditions.map((v) => v.watch_option);
        const exitstedOptions = sets.filter((v) => optionIds.includes(v.id));
        if (!item.hide_visually && !exitstedOptions.length) {
          renderList.push(item);
        }
      }
    });
    return renderList;
  }

  let { setsData, formData } = state;

  function handleChange(result) {
    const { optionId, value } = result;
    formData[optionId] =
      formData[optionId] || formData[optionId] === 0
        ? formData[optionId]
        : null;
    if (formData[optionId] !== value && value !== undefined) {
      setsData = setsData.filter((item) => item.renderId !== optionId);
      watchGroup[optionId]?.forEach((option) => {
        const isExist = sets.find((set) => set.id === option);
        if (isExist) {
          if (
            checkConditions(isExist.conditions, value, optionId) &&
            !isExist.hide_visually
          ) {
            setsData.push({ ...isExist, renderId: optionId });
          }
        }
      });

      setState({
        setsData: setsData,
        formData: {
          ...formData,
          [optionId]: value,
        },
      });
    }
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

  // Hàm này sẽ check các condition của thằng con có desired_value và watch_option === với value của thằng cha đang chờ onChange hay không?
  function checkConditions(conditions, value, watchOptionId) {
    let result;
    value = Number(value);
    conditions.forEach((condition) => {
      const subCondition =
        value === condition.desired_value &&
        condition.watch_option === watchOptionId;
      result =
        condition.combination_operator === "and"
          ? result && subCondition
          : result || subCondition;
    });
    return result;
  }

  return (
    <div className="Ecombestomily">
      {setsData
        ?.sort((a, b) => a.sort_id - b.sort_id)
        .map((input) => {
          const { id, type } = input;
          switch (type) {
            case "Swatch":
              return (
                <EbSwatchInput
                  key={uuidv4()}
                  name={id}
                  onSelectionChange={handleChange}
                  data={input}
                  selectedId={formData[input.id]}
                />
              );

            case "Checkbox":
              return (
                <EbCheckBoxInput
                  key={uuidv4()}
                  name={id}
                  onSelectionClick={(item) => console.log(item)}
                  data={input}
                />
              );
            case "Text Input":
              return (
                <EbTextInput
                  key={uuidv4()}
                  name={id}
                  onSelectionChange={(item) => console.log(item)}
                  data={input}
                />
              );
            case "Dropdown":
              return (
                <EbDropDownInput
                  key={uuidv4()}
                  name={id}
                  onSelectionChange={handleChange}
                  data={input}
                  selectedId={formData[input.id]}
                />
              );
            case "Image Upload":
              return (
                <EbImageUploadInput
                  key={uuidv4()}
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
