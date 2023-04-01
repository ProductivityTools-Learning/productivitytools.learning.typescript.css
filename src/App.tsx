import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StyleComponent from "./Components/StyleComponent";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <StyleComponent />
      <ProductPage></ProductPage>
    </div>
  );
}

export default App;
