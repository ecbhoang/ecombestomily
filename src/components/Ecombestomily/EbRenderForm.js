import React, { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import EbDropDownInput from './options/EbDropDownInput';
import EbSwatchInput from './options/EbSwatchInput';
import EbTextInput from './options/EbTextInput';
import './EbRenderForm.css';
import EbImageUploadInput from './options/EbImageUploadInput';
import EbCheckBoxInput from './options/EbCheckBoxInput';

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

  function initSetData(data) {
    let renderList = [];
    data.forEach((option) => {
      // Render mặc định những option có hide_visually là false và có conditions hoặc mảng conditions bé hơn 1
      if (
        !option.hide_visually &&
        (!option.conditions || option.conditions.length < 1)
      ) {
        renderList.push(option);
      } else {
        // Xử lí case có watch_option không tồn tại
        const optionIds = new Set(
          option.conditions.map((condition) => condition.watch_option)
        );
        const existedOption = data.filter((option) => optionIds.has(option.id));
        if (!option.hide_visually && !existedOption.length) {
          renderList.push(option);
        }
      }
    });
    return renderList;
  }

  let { setsData, formData } = state;

  // console.log('>> setsData: ', setsData);
  // console.log('>> formData: ', formData);

  function handleChange(result) {
    const { optionId, value } = result;
    formData[optionId] =
      formData[optionId] || formData[optionId] === 0
        ? formData[optionId]
        : null;
    if (formData[optionId] !== value && value !== undefined) {
      setsData = setsData.filter((option) => option.renderId !== optionId);
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
        condition.combination_operator === 'and'
          ? result && subCondition
          : result || subCondition;
    });
    return result;
  }

  return (
    <div className="eb-personalize render-form right">
      <h1>EbRenderForm</h1>
      {setsData
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
                  onSelectionClick={(item) => console.log(item)}
                  option={input}
                />
              );
            case 'Text Input':
              return (
                <EbTextInput
                  key={uuidv4()}
                  name={id}
                  onSelectionChange={(item) => console.log(item)}
                  option={input}
                />
              );
            case 'Dropdown':
              return (
                <EbDropDownInput
                  key={uuidv4()}
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
