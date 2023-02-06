import React, { useEffect, useState } from 'react';
import './EbPreviewCanvas.css';

function EbPreviewCanvas() {
  return (
    <div className="preview-canvas left">
      <h1>EbPreviewCanvas</h1>
      <div className="eb-preview-canvas--container">
        <canvas id="preview-canvas" />
      </div>
    </div>
  );
}

export default EbPreviewCanvas;
