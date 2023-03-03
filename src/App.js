/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/common/Loading";
import EbCanvasController from "./components/Ecombestomily/EbCanvasController";
import EbRenderForm from "./components/Ecombestomily/EbRenderForm";

function PersonalizationForm(props) {
  let { personalizeId, shop, canvasContainerQuery } = props;
  canvasContainerQuery = canvasContainerQuery ?? ".product.media";
  const [state, setState] = useState(null);
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

  return (
    <div className="eb-personalization-form">
      {state ? (
        <>
          <EbCanvasController data={state} />
          <EbRenderForm
            canvasQuery={canvasContainerQuery}
            canvasWraperId={canvasWrapperId}
            productConfig={state.productConfig}
            sets={state.sets[0]}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default PersonalizationForm;
