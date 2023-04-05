import React from "react";

function EbOptionLabel(props) {
  const { label, isRequired, maxChar, currentChar, target_id, id } = props;
  return label ? (
    <div className="eb-option-input--label">
      <label htmlFor={target_id} className="eb-option--left">
        {label ? id + "-" + label : null}
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
