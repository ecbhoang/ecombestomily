import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EbOptionLabel from "./EbOptionLabel";

function EbDropDownInput(props) {
  const { data, onSelectionChange, selectedId } = props;
  const [selectedOption, setSelectedOption] = useState(
    selectedId ?? data.values.find((i) => i.selected)?.id
  );
  useEffect(() => {
    onSelectionChange({ optionId: data.id, value: selectedOption });
  }, []);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (onSelectionChange) {
      onSelectionChange({ optionId: data.id, value: e.target.value });
    }
  };

  return data && !data.hide_visually ? (
    <div className="eb-option-input--wrapper">
      <EbOptionLabel
        id={data.id}
        label={data.label}
        isRequired={data.required}
      />

      <div className="eb-option-input--body">
        <select
          className="eb-dropdown-input--item"
          onChange={handleChange}
          value={selectedOption}
        >
          {data.values.map((option) => (
            <option
              key={uuidv4()}
              value={option.id}
              data-product={option.product_id}
            >
              {option.value}
            </option>
          ))}
        </select>
      </div>
      {data.help_text ? (
        <p className="eb-option-input--help_text">{data.help_text}</p>
      ) : null}
    </div>
  ) : null;
}

export default EbDropDownInput;
