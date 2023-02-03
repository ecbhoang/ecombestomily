import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EbOptionLabel from './EbOptionLabel';

function EbTextInput(props) {
  const { option, onSelectionChange, value } = props;
  const [inputValue, setInputValue] = useState(value ?? '');
  const [inputCounter, setInputCounter] = useState(0);

  const uuid_input = uuidv4();

  const handleChange = (e) => {
    window.engraver.setText(option.functions[0]?.text_id ?? 0, e.target.value);
    //should be in debounce mode
    if (option.max_length >= e.target.value.length) {
      setInputCounter(e.target.value.length);
      setInputValue(e.target.value);
      if (onSelectionChange)
        onSelectionChange({ optionId: option.id, value: e.target.value });
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
        uuid_input={uuid_input}
      />
      <div className="eb-option-input--body">
        {option.is_textarea ? (
          <textarea
            type={option.functions[0]?.type ?? 'text'}
            id={uuid_input}
            placeholder={option.placeholder ?? null}
            className="eb-text-input--item"
            cols={option.cols ?? 10}
            rows={option.rows ?? 4}
            value={inputValue}
            onChange={(e) => handleChange(e.target.value)}
          ></textarea>
        ) : (
          <input
            type={option.functions[0]?.type ?? 'text'}
            id={uuid_input}
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
