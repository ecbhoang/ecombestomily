import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EbOptionLabel from "./EbOptionLabel";

function EbTextInput(props) {
  const { data, onSelectionChange, value } = props;
  const [inputValue, setInputValue] = useState(value ?? "");
  const [inputCounter, setInputCounter] = useState(0);

  const uuid_input = uuidv4();

  const handleChange = (e) => {
    //should be in debounce mode
    if (data.max_length >= e.target.value.length) {
      setInputCounter(e.target.value.length);
      setInputValue(e.target.value);
      if (onSelectionChange) onSelectionChange(e.target.value);
    }
  };

  return data && !data.hide_visually ? (
    <div className="eb-option-input--wrapper">
      <EbOptionLabel
        label={data.label}
        isRequired={data.required}
        maxChar={data.max_length}
        currentChar={inputCounter}
        uuid_input={uuid_input}
      />
      <div className="eb-option-input--body">
        {data.is_textarea ? (
          <textarea
            type={data.functions[0]?.type ?? "text"}
            id={uuid_input}
            placeholder={data.placeholder ?? null}
            className="eb-text-input--item"
            cols={data.cols ?? 10}
            rows={data.rows ?? 4}
            value={inputValue}
            onChange={(e) => handleChange(e.target.value)}
          ></textarea>
        ) : (
          <input
            type={data.functions[0]?.type ?? "text"}
            id={uuid_input}
            placeholder={data.placeholder ? data.placeholder : null}
            className="eb-text-input--item"
            value={inputValue}
            onChange={(e) => handleChange(e)}
          />
        )}
      </div>
      {data.help_text ? (
        <p className="eb-option-input--help_text">{data.help_text}</p>
      ) : null}
    </div>
  ) : null;
}

export default EbTextInput;
