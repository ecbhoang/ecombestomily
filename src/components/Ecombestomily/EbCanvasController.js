import { useCallback, useEffect } from "react";

function EbCanvasController(props) {
  const { data } = props;

  const prepareCanvas = useCallback(() => {
    const WRAPPER_ID = "canvas-wrapper";
    const CANVAS_ID = "preview-canvas";

    let canvasEl = document.createElement("canvas");
    let canvasWraper = document.createElement("div");

    document.body.appendChild(canvasWraper);
    canvasWraper.appendChild(canvasEl);

    canvasEl.id = CANVAS_ID;
    canvasWraper.id = WRAPPER_ID;

    canvasWraper.className = "eb-hidden";

    window.engraver.init(CANVAS_ID);
    data.productConfig?.initial_product_id &&
      window.engraver
        .setProduct(data.productConfig.initial_product_id)
        .then((result) => console.log(result));
  }, [data.productConfig.initial_product_id]);

  useEffect(() => {
    prepareCanvas(data);
  }, [data, prepareCanvas]);
  async function renderCanvas(data) {}

  return null;
}

export default EbCanvasController;
