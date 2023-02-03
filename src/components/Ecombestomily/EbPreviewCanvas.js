import React, { useEffect } from 'react';
import './EbPreviewCanvas.css';

function EbPreviewCanvas() {
  useEffect(() => {
    window.engraver.init('preview-canvas');
    setTimeout(() => {
      window.engraver.setProduct('1db22f03-e59b-4363-a2bd-639dadfdd97c');
    }, 2000);
  }, []);

  function processText(textId, value) {
    window.engraver.setText(textId, value);
  }

  setTimeout(() => {
    processText(17, 'Willian');
  }, 5000);

  return (
    <div className="eb-personalize preview-canvas left">
      <h1>EbPreviewCanvas</h1>
      <div className="eb-preview-canvas--container">
        <canvas id="preview-canvas" />
      </div>
    </div>
  );
}

export default EbPreviewCanvas;
