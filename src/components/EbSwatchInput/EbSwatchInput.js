import React, { useState } from "react";
import "./EbSwatchInput.css";

function SquareSelector(props) {
  const { data, onSelectionChange, selectedId } = props;
  const [selected, setSelected] = useState(
    data.values.find((o) => (selectedId ? o.id === selectedId : o.selected))
  );

  const handleClick = (item) => {
    if (item.id !== selected.id) {
      data.values.forEach((s) => (s.selected = s.id === item.id));
      setSelected(item);
      if (onSelectionChange) onSelectionChange(item);
    }
  };

  return data && !data.hide_visually ? (
    <div className="eb-swatch-input--wrapper">
      <div className="eb-swatch-input--label">
        <p className="eb-text--left">{data.label ? data.label : null}</p>
        {data.required ? <p className="eb-text--required">*</p> : null}
      </div>
      <div className="eb-swatch-input--body">
        {data.values.map((item) => {
          return (
            <div
              title={item.tooltip}
              key={item.id}
              onClick={() => handleClick(item)}
              className={`eb-swatch-input--option ${
                selected.id === item.id ? "selected" : ""
              }`}
            >
              <img src={item.thumb_image} alt={`item ${item.id}`} />
            </div>
          );
        })}
      </div>
      <p className="eb-swatch-input--help_text">
        {data.help_text ? data.help_text : null}
      </p>
    </div>
  ) : null;
}

export default SquareSelector;
