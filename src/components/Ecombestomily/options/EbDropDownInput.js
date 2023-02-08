import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EbOptionLabel from './EbOptionLabel';

function EbDropDownInput(props) {
  const { option, onSelectionChange, selectedId } = props;
  const [selectedOption, setSelectedOption] = useState(
    selectedId ?? option.values.find((i) => i.selected)?.id
  );
  useEffect(() => {
    onSelectionChange({ optionId: option.id, value: selectedOption });
  }, []);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (onSelectionChange) {
      onSelectionChange({ optionId: option.id, value: e.target.value });
    }
  };

  const isChooseAnOption = () => {
    let isChooseAnOption = true;
    option.values.forEach((value) => {
      if (value.selected) {
        isChooseAnOption = false;
      }
    });
    return isChooseAnOption;
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
          value={selectedOption || -1}
        >
          {isChooseAnOption() && (
            <option hidden={true} disabled="disabled" value={-1}>
              Choose an Option
            </option>
          )}
          {option.values.map((option) => {
            return (
              <option
                key={uuidv4()}
                value={option.id}
                data-product={option.product_id}
              >
                {option.value}
              </option>
            );
          })}
        </select>
      </div>
      {option.help_text ? (
        <p className="eb-option-input--help_text">{option.help_text}</p>
      ) : null}
    </div>
  ) : null;
}

export default EbDropDownInput;
