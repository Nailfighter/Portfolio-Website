import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./scss/App.scss";

import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
