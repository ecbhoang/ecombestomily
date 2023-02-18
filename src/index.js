import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { STYLE } from './constant';
// import reportWebVitals from './reportWebVitals';
// import './assets/styles/global.css';

class EbPersonalize extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    const style = document.createElement('style');
    style.textContent = STYLE;
    // eslint-disable-next-line no-undef
    this.append(style, mountPoint);
    const dataSlug = this.getAttribute('data-slug');
    const root = ReactDOM.createRoot(mountPoint);

    root.render(<App dataSlug={dataSlug} />);
  }
}
customElements.define('eb-personalize', EbPersonalize);
