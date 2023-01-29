import { useMemo, useState } from "react";
import "./App.css";
import { data } from "./assets/sampleData";
import EbRenderForm from "./components/Ecombestomily/EbRenderForm";

function App() {
  const [selectedData, setSelectedData] = useState("sampleData1");

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
          borderBottom: "2px dashed gray",
          color: "orange",
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
      <EbRenderForm sets={setsData} />
    </div>
  );
}

export default App;
