import { v4 as uuidv4 } from "uuid";

import "./App.css";
import { sampleData } from "./assets/sampleData";
import EbTextInput from "./components/EbTextInput/EbTextInput";
import EbSwatchInput from "./components/EbSwatchInput/EbSwatchInput";

function App() {
  return (
    <div className="App">
      {sampleData.map((input) => {
        switch (input.type) {
          case "Swatch":
            return (
              <EbSwatchInput
                key={input.id || uuidv4()}
                onSelectionChange={(item) => console.log(item)}
                data={input}
              />
            );
          case "Text Input":
            return (
              <EbTextInput
                key={input.id || uuidv4()}
                onSelectionChange={(item) => console.log(item)}
                data={input}
                // value={input.help_text}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default App;
