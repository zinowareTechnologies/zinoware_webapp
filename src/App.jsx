import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeColors from "./Components/Shared/Ui";
import Mainlayout from "./layout/Mainlayout";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
               </Route>
        <Route path="/theme" element={<ThemeColors />} />
      </Routes>
    </Router>
  );
};

export default App;
