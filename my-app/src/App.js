import "./App.css";
import ProductDisplay from "./Components/UseCallback/ProductDisplay.js";
import Component1 from "./Components/useContext/Component1.js";
import Component2 from "./Components/useContext/Component2.js";
import Component4 from "./Components/useContext/Component4.js";
import Example from "./Components/UseRef/UserefExample.js";
import MistakesToAvoidOnUseState from "./Components/UseState, UseEffect, Props/MistakesToAvoidOnUseState.js";
import Parent from "./Components/UseState, UseEffect, Props/Parent.js";
import StateManagement from "./Components/UseState, UseEffect, Props/StateManagement.js";

function App() {
  return (
    <div className="App">
      {/* <Component1 /> */}
      {/* <ProductDisplay /> */}
      {/* <Example /> */}
      {/* <Parent /> */}
      {/* <MistakesToAvoidOnUseState /> */}
      <StateManagement />
    </div>
  );
}

export default App;
