import React, { useState, useEffect } from 'react';
import EbOptionLabel from './EbOptionLabel';

function EbCheckBoxInput(props) {
  const { data, onSelectionClick } = props;
  const [isSelected, setIsSelected] = useState(data.startSelected);

  const handleClick = (e) => {
    setIsSelected(e.target.checked);
  };

  useEffect(() => {
    onSelectionClick({ optionId: data.id, value: isSelected });
  }, [isSelected]);

  return data && !data.hide_visually ? (
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
          id={data.id}
          label={data.label}
          isRequired={data.required}
        />
      </div>

      {data.help_text ? (
        <p className="eb-option-input--help_text">{data.help_text}</p>
      ) : null}
    </div>
  ) : null;
}

export default EbCheckBoxInput;
