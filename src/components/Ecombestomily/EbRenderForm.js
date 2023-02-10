import React, { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import EbDropDownInput from './options/EbDropDownInput';
import EbSwatchInput from './options/EbSwatchInput';
import EbTextInput from './options/EbTextInput';
import './EbRenderForm.css';
import EbImageUploadInput from './options/EbImageUploadInput';
import EbCheckBoxInput from './options/EbCheckBoxInput';
import { parseDataMultipleLevel } from '../../assets/scripts/helpers';

function EbRenderForm(props) {
  // const { engraver } = window;
  const { sets } = props;
  sets.sort((a, b) => a.sort_id - b.sort_id);
  const watchGroup = groupOptionByWatchId(sets);
  const [state, setState] = useState({});
  const [textInput, setTextInput] = useState({});

  useEffect(() => {
    const initData = initSetData(sets);
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

  function handleChange(result) {
    const { optionId, value } = result;

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
          } else {
            tempFormData[element.id] = -1;
          }
        }
        renderedOption = tempRenderList;
      }
      watchGroup[optionId]?.forEach((option, index) => {
        if (index === 0) {
          return;
        }
        const isValidData = sets.find(
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

      // functions?.forEach(async (func) => {
      //   switch (func.type) {
      //     case 'image': {
      //       await engraver.setPresetImage(
      //         Number(func.image_id),
      //         Number(valueObj.image_id)
      //       );
      //       break;
      //     }
      //     case 'text': {
      //       await engraver.setText(Number(func.text_id), value);
      //       break;
      //     }
      //     case 'product': {
      //       await engraver.setProduct(valueObj.product_id);
      //       break;
      //     }
      //     default: {
      //       console.log('Default type', func.type);
      //       break;
      //     }
      //   }
      // });
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
        Number(formData[condition.watch_option]) ===
        Number(condition.desired_value);
      result =
        condition.combination_operator === 'and'
          ? result && subCondition
          : result || subCondition;
    });
    return result;
  }

  return (
    <div className="render-form right">
      <h1>EbRenderForm</h1>
      {renderedOption
        ?.sort((a, b) => a.sort_id - b.sort_id)
        .map((input) => {
          const { id, type } = input;
          switch (type) {
            case 'Swatch':
              return (
                <EbSwatchInput
                  key={uuidv4()}
                  name={id}
                  onSelectionChange={handleChange}
                  option={input}
                  selectedId={formData[input.id]}
                />
              );

            case 'Checkbox':
              return (
                <EbCheckBoxInput
                  key={uuidv4()}
                  name={id}
                  onSelectionClick={(item) => {
                    // console.log(item)
                  }}
                  option={input}
                />
              );
            case 'Text Input':
              return (
                <EbTextInput
                  key={['textinput', input.id].join('_')}
                  name={id}
                  onSelectionChange={(item) => console.log(item)}
                  option={input}
                  handleSetTextInput={setTextInput}
                  textInput={textInput}
                />
              );
            case 'Dropdown':
              return (
                <EbDropDownInput
                  key={['dropdowninput', input.id].join('_')}
                  name={id}
                  onSelectionChange={handleChange}
                  option={input}
                  selectedId={formData[input.id]}
                />
              );
            case 'Image Upload':
              return (
                <EbImageUploadInput
                  key={uuidv4()}
                  name={id}
                  onSelectionChange={(item) => console.log(item)}
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
