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

  const handleChange = (e) => {
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
