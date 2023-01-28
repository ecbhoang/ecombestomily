import React from "react";

function EbOptionLabel(props) {
  const { label, isRequired, maxChar, currentChar, uuid_input } = props;
  return label ? (
    <div className="eb-option-input--label">
      <label htmlFor={uuid_input} className="eb-option--left">
        {label ? label : null}
      </label>
      {maxChar ? (
        <p className="eb-option-input--max_length">
          {`(${currentChar}|${maxChar})`}
        </p>
      ) : null}
      {isRequired ? <p className="eb-text--required">*</p> : null}
    </div>
  ) : null;
}

export default EbOptionLabel;
