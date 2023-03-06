/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import PersonalizationForm from "./App";
import { STYLE } from "./constant";

class EbPersonalize extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    const script = document.createElement("script");
    script.src = "https://cdn.customily.com/customily.js";
    const style = document.createElement("style");
    style.textContent = STYLE;
    this.append(script, style, mountPoint);
    const personalizeId = this.getAttribute("data-slug");
    const shop = this.getAttribute("data-shop");
    const root = ReactDOM.createRoot(mountPoint);

    root.render(
      <PersonalizationForm personalizeId={personalizeId} shop={shop} />
    );
    // root.render(
    //   <PersonalizationForm
    //     personalizeId={
    //       "ew-people-gift-for-cat-lovers-personalized-custom-doormat"
    //     }
    //     shop={"great-family-shop.myshopify.com"}
    //     canvasContainerQuery={".product.media"}
    //   />
    // );
  }
}

customElements.define("eb-personalize", EbPersonalize);
