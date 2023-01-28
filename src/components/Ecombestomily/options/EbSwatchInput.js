import React, { useState } from "react";
import EbOptionLabel from "./EbOptionLabel";

function EbSwatchInput(props) {
  const { data, onSelectionChange, selectedId } = props;
  const [selected, setSelected] = useState(
    data.values.find((o) => (selectedId ? o.id === selectedId : o.selected))
  );

  const handleClick = (item) => {
    if (!selected || item.id !== selected.id) {
      data.values.forEach((s) => (s.selected = s.id === item.id));
      setSelected(item);
      if (onSelectionChange) {
        onSelectionChange({
          value: item.id,
          optionId: data.id,
        });
      }
    }
  };

  return data ? (
    <div className="eb-option-input--wrapper">
      <EbOptionLabel label={data.label} isRequired={data.required} />
      <div className="eb-option-input--body">
        {data.values.map((item) => {
          return (
            <div
              title={item.tooltip}
              key={item.id}
              onClick={() => handleClick(item)}
              className={`eb-swatch-input--option ${
                selected?.id === item.id ? "selected" : ""
              }`}
            >
              {item.thumb_image ? (
                <img src={item.thumb_image} alt={`item ${item.id}`} />
              ) : (
                <div
                  style={{
                    backgroundColor: item.bg_color,
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      {data.help_text ? (
        <p className="eb-option-input--help_text">{data.help_text}</p>
      ) : null}
    </div>
  ) : null;
}

export default EbSwatchInput;
