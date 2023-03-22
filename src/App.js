/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/common/Loading";
import EbCanvasController from "./components/Ecombestomily/EbCanvasController";
import EbPreviewButton from "./components/Ecombestomily/EbPreviewButton";
import EbRenderForm from "./components/Ecombestomily/EbRenderForm";
import PreviewModal from "./components/Ecombestomily/PreviewModal";

function PersonalizationForm(props) {
  let { personalizeId, shop, canvasContainerQuery } = props;
  canvasContainerQuery = canvasContainerQuery ?? ".product.media";
  const [state, setState] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isCanvasInit, setIsCanvasInit] = useState(false);
  const [initProductId, setInitProductId] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const backupurl = "https://personalize-api.ecomygift.com/sh";

  const canvasWrapperId = "canvas-wrapper";
  useEffect(() => {
    if (personalizeId && shop) {
      fetch(`${backupurl}/api/settings/unified/${personalizeId}?shop=${shop}`)
        .then((data) => data.json())
        .then((result) => {
          console.log("Personalize data: ", result);
          if (result) {
            setState(result);
          }
        })
        .catch((reason) => console.log("API Fail Reason: ", reason));
    }
  }, [personalizeId, shop, canvasContainerQuery]);
  const onPreview = () => {
    let img = window.engraver.canvas.toDataURL();
    setPreviewImg(img);
    setShowPreview(true);
  };

  function setSetsData(newOption) {
    let newState = { ...state };

    let checkOption = newState.sets[0].options.find(
      (i) => i.id === newOption.id
    );
    if (checkOption) {
      checkOption = newOption;
    }
    setState(newState);
  }

  return (
    <div id="eb-personalization-form">
      {state ? (
        <>
          <EbCanvasController
            data={state}
            setIsCanvasInit={setIsCanvasInit}
            setInitProductId={setInitProductId}
          />
          <EbRenderForm
            canvasQuery={canvasContainerQuery}
            canvasWraperId={canvasWrapperId}
            productConfig={state.productConfig}
            sets={state.sets[0]}
            setSetsData={setSetsData}
            isCanvasInit={isCanvasInit}
            setIsCanvasInit={setIsCanvasInit}
            setInitProductId={setInitProductId}
          />
        </>
      ) : (
        <Loading />
      )}
      {showPreview && (
        <PreviewModal onClose={setShowPreview} img={previewImg} />
      )}
      <EbPreviewButton isReady={initProductId} onClick={onPreview} />
    </div>
  );
}

export default PersonalizationForm;
