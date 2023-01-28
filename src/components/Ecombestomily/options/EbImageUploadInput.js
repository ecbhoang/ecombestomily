import React, { useState, useEffect, useCallback } from "react";
import EbOptionLabel from "./EbOptionLabel";

function EbImageUploadInput(props) {
  const { data, onSelectionChange, showPreview } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickSelectImage = useCallback(() => {
    document.querySelector(".eb-input-image").click();
  }, []);

  useEffect(() => {
    if (onSelectionChange) onSelectionChange(selectedImage);
  }, [selectedImage, onSelectionChange]);

  function onChangeHandler(e) {
    if (!e) {
      setSelectedImage(null);
    } else {
      console.log(e);
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
      <EbOptionLabel label={data.label} isRequired={data.required} />

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
          Select Image
        </button>
        <button
          onClick={() => {
            onChangeHandler(null);
          }}
          className="eb-unload-input-image"
        >
          X
        </button>
        {showPreview ? <img src={selectedImage} alt="" /> : null}
      </div>
      {data.help_text ? (
        <p className="eb-option-input--help_text">{data.help_text}</p>
      ) : null}
    </div>
  ) : null;
}

export default EbImageUploadInput;
