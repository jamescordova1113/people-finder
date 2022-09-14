import { PeopleFinder } from "./Pages/PeopleFinder";
import AirLogo from "./assets/images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={AirLogo} alt="air" className="logo-air" />
      </header>
      <section>
        <PeopleFinder />
      </section>
    </div>
  );
}

export default App;
