import React, { useState } from 'react';
import './EbDropDownInput.css';
import { v4 as uuidv4 } from 'uuid';

function EbDropDownInput(props) {
  const { data, onSelectionChange, selectedId } = props;
  const [selectedOption, setSelectedOption] = useState(
    selectedId ?? data.values.find((i) => i.selected)?.id
  );

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (onSelectionChange) {
      onSelectionChange(e.target.value);
    }
  };

  return data && !data.hide_visually ? (
    <div className="eb-dropdown-input--wrapper">
      <div className="eb-dropdown-input--label">
        <p className="eb-text--left">{data.label ? data.label : null}</p>
        {data.required ? <p className="eb-text--required">*</p> : null}
      </div>
      <select onChange={handleChange} value={selectedOption}>
        {data.values.map((option) => {
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
      <p className="eb-dropdown-input--help_text">
        {data.help_text ? data.help_text : null}
      </p>
    </div>
  ) : null;
}

export default EbDropDownInput;
