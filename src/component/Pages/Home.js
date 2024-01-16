import React from "react";
import Navbar from "../navbar/Navbar";
import FAQ from "./FAQ";
import { FAQdata } from "../data/data";
import Flashcard from "./Flashcard";
import PublisedNavbar from "../others/PublisedNavbar";
import Path from "../others/Path";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Path />

      <Flashcard />
      <PublisedNavbar />
      <FAQ FAQdata={FAQdata} />
    </div>
  );
};

export default Home;
