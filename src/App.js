import "./App.css";
import { sampleData3 } from "./assets/sampleData";
import EbRenderForm from "./components/Ecombestomily/EbRenderForm";

function App() {
  sampleData3.sort((a, b) => a.sort_id - b.sort_id);

  return (
    <div className="App">
      <EbRenderForm sets={sampleData3} />
    </div>
  );
}

export default App;
