import React, { useState } from "react";
import EbOptionLabel from "./EbOptionLabel";

function EbTextInput(props) {
  const { option, onSelectionChange, value } = props;
  const [inputValue, setInputValue] = useState(value ?? "");
  const [inputCounter, setInputCounter] = useState(0);

  const handleChange = (e) => {
    if (option.max_length >= e.target.value.length) {
      setInputCounter(e.target.value.length);
      setInputValue(e.target.value);
      if (onSelectionChange)
        onSelectionChange({
          render: true,
          option: option,
          value: e.target.value,
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
        maxChar={option.max_length}
        currentChar={inputCounter}
        target_id={"text-input" + option.id}
        name={`options[${option.id}]`}
      />
      <div className="eb-option-input--body">
        {option.is_textarea ? (
          <textarea
            name={`options[${option.id}]`}
            type={option.functions[0]?.type ?? "text"}
            id={"text-input" + option.id}
            placeholder={option.placeholder ?? null}
            className="eb-text-input--item"
            cols={option.cols ?? 10}
            rows={option.rows ?? 4}
            value={inputValue}
            onChange={(e) => handleChange(e)}
          ></textarea>
        ) : (
          <input
            name={`options[${option.id}]`}
            type={option.functions[0]?.type ?? "text"}
            id={"text-input" + option.id}
            placeholder={option.placeholder ? option.placeholder : null}
            className="eb-text-input--item"
            value={inputValue}
            onChange={(e) => handleChange(e)}
          />
        )}
      </div>
      {option.help_text ? (
        <p className="eb-option-input--help_text">{option.help_text}</p>
      ) : null}
    </div>
  ) : null;
}

export default EbTextInput;
