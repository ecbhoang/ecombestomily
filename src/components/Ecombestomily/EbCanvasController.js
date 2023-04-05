import { useCallback, useEffect } from "react";

function EbCanvasController(props) {
  const prepareCanvas = useCallback(() => {
    const WRAPPER_ID = "canvas-wrapper";
    const CANVAS_ID = "preview-canvas";

    let checkCanvas = document.getElementById(CANVAS_ID);
    if (!checkCanvas) {
      let canvasEl = document.createElement("canvas");
      let canvasWraper = document.createElement("div");

      document.body.appendChild(canvasWraper);
      canvasWraper.appendChild(canvasEl);

      canvasEl.id = CANVAS_ID;
      canvasWraper.id = WRAPPER_ID;

      // canvasWraper.className = "eb-hidden";

      window.engraver.init(CANVAS_ID);
      // props.setIsCanvasInit(true);
      if (props.initProduct) {
        window.engraver.setProduct(props.initProduct).then((result) => {
          // console.log(props);
          props.setInitProductId(true);
        });
      }
    } else {
      window.engraver.init(CANVAS_ID);
      // props.setIsCanvasInit(true);
      if (props.initProduct) {
        window.engraver.setProduct(props.initProduct).then((result) => {
          // console.log(props);
          props.setInitProductId(true);
        });
      }
    }
  }, []);

  useEffect(() => {
    // setTimeout(() => {
    prepareCanvas();
    // }, 2000);
  }, [prepareCanvas]);

  return null;
}

export default EbCanvasController;
