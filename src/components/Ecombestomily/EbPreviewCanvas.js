import React, { useEffect } from 'react';
import './EbPreviewCanvas.css';

// let listProductId = [
//   '1db22f03-e59b-4363-a2bd-639dadfdd97c',
//   '840a68ba-4bce-4274-95f5-63a2a04ca780',
//   '27bffcdb-c726-44ce-bafe-d17f2d297b87',
//   '1297ab1d-9a5f-41d7-b687-a1ada2320997',
//   '7b3272a9-f698-40ff-9df4-d9471d322863',
//   '1db22f03-e59b-4363-a2bd-639dadfdd97c',
// ];

function EbPreviewCanvas() {
  useEffect(() => {
    window.engraver.init('preview-canvas');

    setTimeout(() => {
      window.engraver.setProduct('840a68ba-4bce-4274-95f5-63a2a04ca780');
    }, 2000);
  }, []);

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
