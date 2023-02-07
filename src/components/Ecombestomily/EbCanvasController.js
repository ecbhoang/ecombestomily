import { useEffect, useState } from 'react';

function EbCanvasController() {
  const { engraver } = window;
  let canvasState = {};
  // async function checkCanvasState(key, value) {
  //   if (key) {
  //   } else {
  //     await engraver.setPresetImage(key, value);
  //   }
  // }

  async function renderCanvas(data) {
    const { optionId, funcObj, valueObj } = data;
    canvasState = { ...canvasState, [optionId]: data };
    console.log('canvasState', canvasState);
    for (const key in canvasState) {
      const item = canvasState[key];
      switch (item.funcObj.type) {
        case 'image': {
          // await engraver.setPresetImage(
          //   Number(item.funcObj.image_id),
          //   Number(item.valueObj.image_id)
          // );
          break;
        }
        case 'text': {
          // ebCanvas.setText(Number(func.text_id), value);
          break;
        }
        case 'product': {
          // await ebCanvas.setProduct(valueObj.product_id);
          break;
        }
        default: {
          console.log('Default type');
          break;
        }
      }
    }

    // if (canvasState[key] !== undefined) {
    // }
    // engraver.setPresetImage(Number(key), -1);
    // setCanvasState({ ...canvasState, [key]: value });
    // engraver.setPresetImage(Number(key), Number(value));
  }

  window.ebCanvas = { renderCanvas: renderCanvas };
  return null;
}

export default EbCanvasController;
