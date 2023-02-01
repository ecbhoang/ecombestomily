import React, { useState, useEffect, useCallback } from 'react';
import EbOptionLabel from './EbOptionLabel';

function EbImageUploadInput(props) {
  const { data, onSelectionChange, showPreview } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickSelectImage = useCallback(() => {
    document.querySelector('.eb-input-image').click();
  }, []);

  useEffect(() => {
    if (onSelectionChange) onSelectionChange(selectedImage);
  }, [selectedImage, onSelectionChange]);

  function onChangeHandler(e) {
    if (!e) {
      setSelectedImage(null);
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

  return !data.hide_visually ? (
    <div className="eb-option-input--wrapper">
      <EbOptionLabel
        id={data.id}
        label={data.label}
        isRequired={data.required}
      />

      <div className="eb-option-input--body">
        <input
          className="eb-input-image"
          type="file"
          onChange={onChangeHandler}
        />
        <button
          type="button"
          className="eb-btn-upload-image"
          onClick={handleClickSelectImage}
        >
          {selectedImage ? 'Change Image' : 'Select Image'}
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
        {data.help_text ? (
          <p className="eb-option-input--help_text">{data.help_text}</p>
        ) : null}
      </div>
    </div>
  ) : null;
}

export default EbImageUploadInput;
