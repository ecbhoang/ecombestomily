import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./EbTextInput.css";

function EbTextInput(props) {
  const { data, onSelectionChange, value } = props;
  const [inputValue, setInputvalue] = useState(value ?? "");
  const [inputCounter, setInputCounter] = useState(0);

  const uuid_input = uuidv4();

  const handleChange = (e) => {
    //should be in debounce mode
    if (data.max_length >= e.target.value.length) {
      setInputCounter(e.target.value.length);
      setInputvalue(e.target.value);
      if (onSelectionChange) onSelectionChange(e.target.value);
    }
  };

  return data && !data.hide_visually ? (
    <div className="eb-text-input--wrapper">
      <div className="eb-text-input--label">
        <label htmlFor={uuid_input} className="eb-text--left">
          {data.label ? data.label : null}
        </label>
        {data.max_length ? (
          <p className="eb-text-input--max_length">
            {`(${inputCounter}|${data.max_length})`}
          </p>
        ) : null}
        {data.required ? <p className="eb-text--required">*</p> : null}
      </div>
      <div className="eb-text-input--body">
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
      <p className="eb-text-input--help_text">
        {data.help_text ? data.help_text : null}
      </p>
    </div>
  ) : null;
}

export default EbTextInput;
