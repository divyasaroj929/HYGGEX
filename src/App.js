import { Route, Routes } from "react-router-dom";
import Home from "./component/Pages/Home";
import FAQ from "./component/Pages/FAQ";
import Flashcard from "./component/Pages/Flashcard";
import Contact from "./component/Pages/Contact";
import { tab } from "./data";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/HYGGEX" element={<Home />} />
        <Route path="/flashcard" element={<Flashcard tab={tab} />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
