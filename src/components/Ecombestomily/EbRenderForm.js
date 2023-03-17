import React, { useEffect, useMemo, useState } from "react";

import { parseDataMultipleLevel } from "../../assets/scripts/helpers";
import "./EbRenderForm.css";
import EbCheckBoxInput from "./options/EbCheckBoxInput";
import EbDropDownInput from "./options/EbDropDownInput";
import EbImageUploadInput from "./options/EbImageUploadInput";
import EbSwatchInput from "./options/EbSwatchInput";
import EbTextInput from "./options/EbTextInput";

function EbRenderForm(props) {
  const {
    sets,
    canvasQuery,
    canvasWraperId,
    isCanvasInit,
    setIsCanvasInit,
    setInitProductId,
  } = props;

  const options = useMemo(() => {
    if (sets && sets.options) {
      return sets.options.sort((a, b) => a.sort_id - b.sort_id);
    } else {
      return [];
    }
  }, [sets]);

  const watchGroup = groupOptionByWatchId(options);
  const [state, setState] = useState({});
  const { engraver } = window;

  useEffect(() => {
    const initData = initSetData(sets.options);
    setState({
      renderedOption: initData,
      formData: {},
    });
  }, [sets]);

  function initSetData(data) {
    let renderList = [];
    data.forEach((option) => {
      const optionIds = new Set(
        option.conditions.map((condition) => condition.watch_option)
      );
      const existedOption = data.filter((option) => optionIds.has(option.id));

      // Render mặc định những option có hide_visually là false và có conditions hoặc mảng conditions bé hơn 1 và Xử lí case có watch_option không tồn tại
      if (
        !option.conditions ||
        option.conditions.length < 1 ||
        !existedOption.length ||
        option.hide_visually
      ) {
        renderList.push(option);
      } else {
      }
    });
    return renderList;
  }

  let { renderedOption, formData } = state;

  function checkValueExistence(list1, list2) {
    return list1.some((val) => list2.includes(val));
  }

  function renderRequest(data) {
    const { option, value, valueObj, functions } = data;
    //[start] handle canvas renderer
    if (!isCanvasInit) {
      let container = document.querySelector(canvasQuery);
      let canvas = document.getElementById(canvasWraperId);
      if (container) {
        container.innerHTML = "";
        container.appendChild(canvas);
        canvas.classList.remove("eb-hidden");
        setIsCanvasInit(true);
      } else {
        console.error("[ECB-Personalization]Load canvas container fail");
      }
    }

    const isFileUpload = "file_upload_image_id" in option;
    if (isFileUpload) {
      engraver.setImage(option.file_upload_image_id, value);
    } else {
      functions.forEach((item) => {
        switch (item.type) {
          case "image": {
            engraver.setPresetImage(
              Number(item.image_id),
              Number(valueObj.image_id)
            );
            break;
          }
          case "text": {
            engraver.setText(Number(item.text_id), value);
            break;
          }
          case "product": {
            engraver.setProduct(valueObj.product_id);
            setInitProductId(true);
            break;
          }
          default: {
            console.log("Type chua bat", item.type);
            break;
          }
        }
      });
    }
  }

  function handleChange(result) {
    const { option, value, render } = result;
    const optionId = option?.id;
    console.log(watchGroup[optionId]);
    if (render) {
      renderRequest(result);
    }
    formData[optionId] =
      formData[optionId] || formData[optionId] === 0
        ? formData[optionId]
        : null;
    if (formData[optionId] !== value && value !== undefined) {
      let tempFormData = {
        ...formData,
        [optionId]: value,
      };
      if (watchGroup[optionId]) {
        let tempRenderList = [];
        for (let index = 0; index < renderedOption.length; index++) {
          const element = renderedOption[index];
          if (!watchGroup[optionId].includes(element.id)) {
            tempRenderList.push(element);
          } else if (watchGroup[element.id]?.length > 1) {
            if (
              !checkValueExistence(
                watchGroup[element.id].slice(1),
                watchGroup[optionId]
              )
            ) {
              tempFormData[element.id] = -1;
            }
          }
        }
        renderedOption = tempRenderList;
      }
      watchGroup[optionId]?.forEach((option, index) => {
        if (index === 0) {
          return;
        }
        const isValidData = options.find(
          (set) => Number(set.id) === Number(option)
        );
        if (isValidData) {
          const matchConditionNotHidden =
            checkConditions(tempFormData, isValidData.conditions) &&
            !isValidData.hide_visually;
          if (matchConditionNotHidden) {
            const isExistOption = renderedOption.find(
              (option) => option.id === isValidData.id
            );
            if (!isExistOption) {
              renderedOption.push({ ...isValidData, renderId: optionId });
            }
          }
        }
      });

      setState({
        renderedOption: renderedOption,
        formData: tempFormData,
      });
    }
  }

  // Hàm này sẽ tạo ra một object bao gồm props là các watch_option và value là một Set()các id option con có cái watch_option đó
  function groupOptionByWatchId(data) {
    const result = {};
    data.forEach((option) => {
      option.conditions.forEach((condition) => {
        if (!result[condition.watch_option]) {
          result[condition.watch_option] = new Set();
        }
        result[condition.watch_option].add(option.id);
      });
    });
    return parseDataMultipleLevel(result);
  }

  // Hàm này sẽ check các condition của thằng con có desired_value và watch_option === với value của thằng cha đang chờ onChange hay không?
  function checkConditions(formData, conditions) {
    let result;
    conditions.forEach((condition) => {
      const subCondition =
        formData[condition.watch_option] === -1
          ? false
          : Number(formData[condition.watch_option]) ===
            Number(condition.desired_value);

      result =
        condition.combination_operator === "and"
          ? result && subCondition
          : result || subCondition;
    });
    return result;
  }
  console.log("length", renderedOption?.length);
  return (
    <div className="render-form">
      {renderedOption
        ?.sort((a, b) => a.sort_id - b.sort_id)
        .map((input) => {
          const { id, type } = input;
          switch (type) {
            case "Swatch":
              return (
                <EbSwatchInput
                  key={["swatchinput", input.id].join("_")}
                  name={id}
                  onSelectionChange={handleChange}
                  option={input}
                  selectedId={formData[input.id]}
                />
              );

            case "Checkbox":
              return (
                <EbCheckBoxInput
                  key={["checkboxinput", input.id].join("_")}
                  name={id}
                  onSelectionClick={(item) => {}}
                  option={input}
                />
              );
            case "Text Input":
              return (
                <EbTextInput
                  key={["textinput", input.id].join("_")}
                  name={id}
                  onSelectionChange={handleChange}
                  option={input}
                />
              );
            case "Dropdown":
              return (
                <EbDropDownInput
                  key={["dropdowninput", input.id].join("_")}
                  name={id}
                  onSelectionChange={handleChange}
                  option={input}
                  selectedId={formData[input.id]}
                />
              );
            case "Image Upload":
              return (
                <EbImageUploadInput
                  key={["imageinput", input.id].join("_")}
                  name={id}
                  onSelectionChange={handleChange}
                  selected={formData[input.id]}
                  option={input}
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
