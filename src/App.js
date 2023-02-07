import { useMemo, useState, useEffect } from 'react';
import './App.css';
import { data } from './assets/sampleData';
import EbCanvasController from './components/Ecombestomily/EbCanvasController';

import EbRenderForm from './components/Ecombestomily/EbRenderForm';

function App() {
  const [selectedDgithuata, setSelectedData] = useState(Object.keys(data)[0]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.engraver.init('preview-canvas');

    setTimeout(() => {
      // default product: 1db22f03-e59b-4363-a2bd-639dadfdd97c
      // customFlag: 8db9d06e-cdc3-4232-b30d-ae1036d3fd46
      // customMetalSign: 1c960976-b1b1-48ee-969f-5da2bafab376
      // customPhoto: 26f8bd7f-86d8-44f3-8cc8-154b082c3839
      window.engraver
        .setProduct('8db9d06e-cdc3-4232-b30d-ae1036d3fd46')
        .then(() => {
          setIsReady(true);
        });
    }, 2000);
  }, []);

  const setsData = useMemo(() => {
    return data[selectedData];
  }, [selectedData]);

  function handleChangeData(event) {
    if (event.target.value) {
      setSelectedData(event.target.value);
    }
  }

  return (
    <div className="App">
      <div
        className="eb-option-input--body"
        style={{
          paddingBottom: 30,
          marginTop: 20,
          borderBottom: '2px dashed gray',
          color: 'orange',
        }}
      >
        <label htmlFor="mow" className="eb-option-input--label">
          Change data source
        </label>
        <select
          id="mow"
          className="eb-dropdown-input--item"
          onChange={handleChangeData}
          value={selectedData}
        >
          {Object.keys(data).map((k) => {
            return (
              <option key={k} value={k}>
                {k}
              </option>
            );
          })}
        </select>
      </div>
      <div className="eb-personalize">
        <div className="preview-canvas left">
          <h1>EbPreviewCanvas</h1>
          <div className="eb-preview-canvas--container">
            <canvas id="preview-canvas" />
          </div>
        </div>
        <EbCanvasController />
        {isReady ? <EbRenderForm sets={setsData} /> : null}
      </div>
    </div>
  );
}

export default App;
