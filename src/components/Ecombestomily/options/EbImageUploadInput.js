import React, { useState, useEffect, useCallback, useRef } from "react";
import EbOptionLabel from "./EbOptionLabel";

function EbImageUploadInput(props) {
  const { option, onSelectionChange, showPreview, selected } = props;
  const [selectedImage, setSelectedImage] = useState(selected);
  const inputRef = useRef(null);
  const defaultBase64Image =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";

  const handleClickSelectImage = useCallback(() => {
    inputRef.current.click();
  }, []);

  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange({
        render: true,
        option: option,
        value: selectedImage ?? defaultBase64Image,
      });
    }
  }, [selectedImage]);

  function onChangeHandler(e) {
    if (!e) {
      setSelectedImage(null);
      inputRef.current.value = "";
    } else {
      encodeImageFileAsURL(e.target.files[0]);
    }
  }

  function encodeImageFileAsURL(file) {
    let reader = new FileReader();
    reader.onloadend = function () {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
  console.log("selectedImageselectedImage", selectedImage);
  return !option.hide_visually ? (
    <div className="eb-option-input--wrapper">
      <EbOptionLabel
        id={option.id}
        label={option.label}
        isRequired={option.required}
      />

      <div className="eb-option-input--body">
        <input
          ref={inputRef}
          className="eb-input-image"
          type="file"
          name={`options[${option.id}]`}
          onChange={onChangeHandler}
        />
        <button
          type="button"
          className="eb-btn-upload-image"
          onClick={handleClickSelectImage}
        >
          Select Image
        </button>
        {selectedImage ? (
          !showPreview ? (
            <button
              title="Remove this image"
              onClick={() => {
                onChangeHandler(null);
              }}
              className="eb-unload-input-image-fullsize"
            >
              × Remove Image
            </button>
          ) : (
            <div className="eb-upload-input--image-container">
              <button
                title="Remove this image"
                onClick={() => {
                  onChangeHandler(null);
                }}
                className="eb-unload-input-image-hover"
              >
                ×
              </button>
              <img
                title="Change image"
                onClick={handleClickSelectImage}
                src={selectedImage}
                alt="upload-preview"
              />
            </div>
          )
        ) : null}
        {option.help_text ? (
          <p className="eb-option-input--help_text">{option.help_text}</p>
        ) : null}
      </div>
    </div>
  ) : null;
}

export default EbImageUploadInput;
