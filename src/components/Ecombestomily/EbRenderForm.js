import React, { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import EbDropDownInput from './options/EbDropDownInput';
import EbSwatchInput from './options/EbSwatchInput';
import EbTextInput from './options/EbTextInput';
import './EbRenderForm.css';
import EbImageUploadInput from './options/EbImageUploadInput';
import EbCheckBoxInput from './options/EbCheckBoxInput\u001D';

function EbRenderForm(props) {
  const { sets } = props;
  sets.sort((a, b) => a.sort_id - b.sort_id);
  const watchGroup = groupOptionByWatchId(sets);
  console.log('watchGroup', parseObject(watchGroup));
  const [state, setState] = useState({});
  const [currentOptionId, setCurrentOptionId] = useState(null);

  useEffect(() => {
    const initData = initSetData(sets);
    setState({
      setsData: initData,
      formData: initFormData(sets),
    });
  }, [sets]);

  // Hàm này sẽ filter data gốc và trả về mảng mới bằng cách bỏ những item có hide_visually = true và không có condition
  // Hàm này sẽ filter data gốc và lấy những item cần render ra theo formData
  function initSetData(sets) {
    const formData = initFormData(sets);
    let renderList = [];
    sets.forEach((item) => {
      if (
        !item.hide_visually &&
        (!item.conditions || item.conditions.length < 1)
      ) {
        renderList.push(item);
      } else {
      }
      if (watchGroup[item.id]) {
        // handleChange({ optionId: item.id, value: formData[item.id] });
      }
    });
    return renderList;
  }

  let { setsData, formData } = state;

  function handleChange(result) {
    const { optionId, value } = result;
    setsData = setsData.filter((item) => item.renderId !== optionId);
    watchGroup[optionId]?.forEach((option) => {
      const isExist = sets.find((set) => set.id === option);
      if (isExist) {
        console.log('isExist', isExist);
        if (
          checkConditions(isExist.conditions, value, optionId) &&
          !isExist.hide_visually
        ) {
          setsData.push({ ...isExist, renderId: optionId });
          console.log('>> New Set Data: ', setsData);
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

  // Hàm này lấy ra những id trong data và gán value cho từng type
  // Trường hợp type là Swatch và Dropdown thì nếu không có selected thì gán bằng null
  function initFormData(data) {
    let templateData = {};
    console.log('>> Data: ', data);
    data.forEach((item) => {
      let found;
      if (item.type === 'Swatch' || item.type === 'Dropdown') {
        found = item.values.find((i) => i.selected === true);
        templateData[item.id] = found ? found.id : null;
      } else if (item.type === 'Text Input') {
        templateData[item.id] = 'abc';
      } else if (item.type === 'Image Upload') {
        templateData[item.id] = 'base64';
      } else if (item.type === 'Checkbox') {
        templateData[item.id] = 'boolean';
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

  function parseObject(obj) {
    const parsed = {};
    for (const key in obj) {
      parsed[key] = Array.from(obj[key]);
    }
    return parsed;
  }
  console.log('formData, ', formData);
  console.log('setsData', setsData);

  return (
    <div className="Ecombestomily">
      {setsData?.map((input) => {
        const { id, type, conditions, hide_visually } = input;
        switch (type) {
          case 'Swatch':
            return (
              <EbSwatchInput
                key={uuidv4()}
                name={id}
                onSelectionChange={handleChange}
                data={input}
                selectedId={formData[input.id]}
              />
            );

          case 'Checkbox':
            return (
              <EbCheckBoxInput
                key={uuidv4()}
                name={id}
                onSelectionClick={(item) => console.log(item)}
                data={input}
              />
            );
          case 'Text Input':
            return (
              <EbTextInput
                key={uuidv4()}
                name={id}
                onSelectionChange={(item) => console.log(item)}
                data={input}
              />
            );
          case 'Dropdown':
            return (
              <EbDropDownInput
                key={uuidv4()}
                name={id}
                onSelectionChange={handleChange}
                data={input}
                selectedId={formData[input.id]}
              />
            );
          case 'Image Upload':
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
