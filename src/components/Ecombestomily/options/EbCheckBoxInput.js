import React, { useState, useEffect } from 'react';
import EbOptionLabel from './EbOptionLabel';

function EbCheckBoxInput(props) {
  const { option, onSelectionClick } = props;
  const [isSelected, setIsSelected] = useState(option.startSelected);

  const handleClick = (e) => {
    setIsSelected(e.target.checked);
  };

  useEffect(() => {
    onSelectionClick({ optionId: option.id, value: isSelected });
  }, [isSelected]);

  return option && !option.hide_visually ? (
    <div
      style={{ display: 'flex', alignItems: 'center' }}
      className="eb-option-input--wrapper"
    >
      <input
        type="checkbox"
        checked={isSelected}
        onClick={handleClick}
        className="eb-checkbox-input--item"
      />
      <div className="eb-checkbox-input--label">
        <EbOptionLabel
          style={{ display: 'inline' }}
          id={option.id}
          label={option.label}
          isRequired={option.required}
        />
      </div>

      {option.help_text ? (
        <p className="eb-option-input--help_text">{option.help_text}</p>
      ) : null}
    </div>
  ) : null;
}

export default EbCheckBoxInput;
