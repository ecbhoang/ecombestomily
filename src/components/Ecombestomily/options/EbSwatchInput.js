import React, { useEffect, useState } from 'react';
import EbOptionLabel from './EbOptionLabel';

function EbSwatchInput(props) {
  const { option, onSelectionChange, selectedId } = props;
  const [selected, setSelected] = useState(
    option.values.find((o) =>
      selectedId !== undefined
        ? Number(o.id) === Number(selectedId)
        : o.selected
    )
  );

  useEffect(() => {
    if (selected) {
      onSelectionChange({
        optionId: option.id,
        value: selected?.id,
        valueObj: selected,
        functions: option.functions,
      });
    }
  }, []);

  const handleClick = (item) => {
    if (!selected || item.id !== selected.id) {
      setSelected(item);
      if (onSelectionChange) {
        onSelectionChange({
          value: item.id,
          optionId: option.id,
          valueObj: item,
          functions: option.functions,
        });
      }
    }
  };

  return !option.hide_visually ? (
    <div className="eb-option-input--wrapper">
      <EbOptionLabel
        id={option.id}
        label={option.label}
        isRequired={option.required}
      />
      <div className="eb-option-input--body">
        {option.values.map((item) => {
          return (
            <div
              title={item.tooltip}
              key={item.id}
              onClick={() => handleClick(item)}
              className={`eb-swatch-input--option ${
                selected?.id === item.id ? 'selected' : ''
              }`}
            >
              {item.thumb_image ? (
                <img src={item.thumb_image} alt={`item ${item.id}`} />
              ) : (
                <div
                  style={{
                    backgroundColor: item.bg_color,
                    width: '100%',
                    height: '100%',
                  }}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      {option.help_text ? (
        <p className="eb-option-input--help_text">{option.help_text}</p>
      ) : null}
    </div>
  ) : null;
}

export default EbSwatchInput;
