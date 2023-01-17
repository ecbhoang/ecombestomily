import { v4 as uuidv4 } from 'uuid';

import './App.css';
import { sampleDataUploadImage } from './assets/sampleData';
import EbTextInput from './components/EbTextInput/EbTextInput';
import EbSwatchInput from './components/EbSwatchInput/EbSwatchInput';
import EbDropDownInput from './components/EbDropDownInput/EbDropDownInput';
import EbImageUploadInput from './components/EbImageUploadInput/EbImageUploadInput';

function compare(a, b) {
  if (a.sort_id < b.sort_id) {
    return -1;
  }
  if (a.sort_id > b.sort_id) {
    return 1;
  }
  return 0;
}

function App() {
  sampleDataUploadImage.sort(compare);

  return (
    <div className="App">
      {sampleDataUploadImage.map((input) => {
        switch (input.type) {
          case 'Swatch':
            return (
              <EbSwatchInput
                key={input.id || uuidv4()}
                onSelectionChange={(item) => console.log(item)}
                data={input}
              />
            );
          case 'Text Input':
            return (
              <EbTextInput
                key={input.id || uuidv4()}
                onSelectionChange={(item) => console.log(item)}
                data={input}
                // value={input.help_text}
              />
            );
          case 'Dropdown':
            return (
              <EbDropDownInput
                key={input.id || uuidv4()}
                onSelectionChange={(item) => console.log(item)}
                data={input}
                selectedId={1}
                // value={input.help_text}
              />
            );
          case 'Image Upload':
            return (
              <EbImageUploadInput
                key={input.id || uuidv4()}
                onSelectionChange={(item) => console.log(item)}
                data={input}
                value={input.help_text}
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
