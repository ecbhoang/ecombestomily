import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EbOptionLabel from './EbOptionLabel';

function EbTextInput(props) {
  const { option, onSelectionChange, value, handleSetTextInput, textInput } =
    props;
  const [inputValue, setInputValue] = useState(value ?? '');
  const [inputCounter, setInputCounter] = useState(0);

  const uuid_input = uuidv4();

  // const helpText = option.help_text
  //   .replace('Example: ', '')
  //   .replace('amp;', '');

  useEffect(() => {
    // window.engraver.setText(
    //   Number(option.functions[0]?.text_id) ?? 0,
    //   helpText
    // );
  }, []);

  const handleChange = (e) => {
    //should be in debounce mode
    if (option.max_length >= e.target.value.length) {
      setInputCounter(e.target.value.length);
      handleSetTextInput({
        ...textInput,
        [option.id]: e.target.value,
      });
      if (onSelectionChange)
        onSelectionChange({
          optionId: option.id,
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
            onChange={(e) => handleChange(e)}
          ></textarea>
        ) : (
          <input
            type={option.functions[0]?.type ?? 'text'}
            id={uuid_input}
            placeholder={option.placeholder ? option.placeholder : null}
            className="eb-text-input--item"
            value={textInput[option.id]}
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
