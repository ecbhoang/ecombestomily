import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EbOptionLabel from './EbOptionLabel';

function EbDropDownInput(props) {
  const { option, onSelectionChange, selectedId } = props;
  const [selectedOption, setSelectedOption] = useState(
    selectedId ?? option.values.find((i) => i.selected)?.id
  );
  useEffect(() => {
    onSelectionChange({
      optionId: option.id,
      value: selectedOption,
      functions: option.functions,
      valueObj: option.values.find((value) => value.id === selectedOption),
    });
  }, []);

  const getInfoOption = (values) => {
    values = values.map((value) => {
      return {
        prodId: value.product_id,
        id: value.id,
        imageId: value.image_id,
      };
    });
    return values;
  };

  const handleChange = (e) => {
    // const listInfoOtion = getInfoOption(option.values);
    // listInfoOtion.forEach((item) => {
    //   if (Number(item.imageId) === Number(e.target.value) + 2) {
    //     window.engraver.setPresetImage(
    //       Number(option.functions[0]?.image_id) ?? 0,
    //       item.imageId
    //     );
    //   }
    //   if (item.imageId === Number(e.target.value)) {
    //     console.log('Dropdown swatch input 1');
    //     window.engraver.setPresetImage(
    //       Number(option.functions[0]?.image_id) ?? 0,
    //       Number(e.target.value)
    //     );
    //   }
    //   const isSetProductOption =
    //     Number(e.target.value) === item.id && item.prodId;
    //   if (isSetProductOption) {
    //     window.engraver.setProduct(item.prodId);
    //     console.log('Dropdown swatch input 2');
    //   }
    // });

    setSelectedOption(e.target.value);
    if (onSelectionChange) {
      onSelectionChange({
        optionId: option.id,
        value: e.target.value,
        valueObj: option.values.find(
          (value) => Number(value.id) === Number(e.target.value)
        ),
        functions: option.functions,
      });
    }
  };

  return option && !option.hide_visually ? (
    <div className="eb-option-input--wrapper">
      <EbOptionLabel
        id={option.id}
        label={option.label}
        isRequired={option.required}
      />

      <div className="eb-option-input--body">
        <select
          className="eb-dropdown-input--item"
          onChange={handleChange}
          value={selectedOption}
        >
          {option.values.map((option) => (
            <option
              key={uuidv4()}
              value={option.id}
              data-product={option.product_id}
            >
              {option.value}
            </option>
          ))}
        </select>
      </div>
      {option.help_text ? (
        <p className="eb-option-input--help_text">{option.help_text}</p>
      ) : null}
    </div>
  ) : null;
}

export default EbDropDownInput;
