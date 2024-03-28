import { Route, Routes } from "react-router-dom";
import Home from "./component/Pages/Home";
import FAQ from "./component/Pages/FAQ";
import Flashcard from "./component/Pages/Flashcard";
import Contact from "./component/Pages/Contact";
import Study from "./component/tab/Study";
import Test from "./component/tab/Test";
import Quiz from "./component/tab/Quiz";
import Game from "./component/tab/Game";
import Others from "./component/tab/Others";

import "./App.css";

function App() {
  return (
    <>
      {/* <div className="home-container "> */}
      <Routes>
        <Route exact path="/HYGGEX" element={<Home />} />
        <Route path="/flashcard" element={<Flashcard />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/study" element={<Study />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/text" element={<Test />} />
        <Route path="/game" element={<Game />} />
        <Route path="/other" element={<Others />} />
      </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
