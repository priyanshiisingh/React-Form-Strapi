import React from "react";
import "./App.css";
import BrandIndex from "./Layouts/Brand/BrandIndex";
import FooterIndex from "./Layouts/Footer/FooterIndex";
import Header from "./Layouts/Header/Header";
import FormFormat from "./components/Form/FormFormat";

function App() {
  return (
    <div className="App">
      <BrandIndex />
      <Header />
      <FormFormat />
      <FooterIndex />
    </div>
  );
}

export default App;
