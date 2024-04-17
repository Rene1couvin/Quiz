import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/component/quiz";

const App = () => {
  return (
    <BrowserRouter>
    {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;