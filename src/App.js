import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/buttonComponent";
import ImageComponent from "./components/imgComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ImageComponent searchImg="https://placedog.net/200" imgDescription="Small Dog" />
        <ImageComponent searchImg="https://placedog.net/600" imgDescription="big Dog" />
        <ImageComponent searchImg="https://placedog.net/400" imgDescription="Dog" />

        <ButtonComponent buttonText="Click Me!" />
        <ButtonComponent buttonText="Cliccami!" />
      </header>
    </div>
  );
}

export default App;
