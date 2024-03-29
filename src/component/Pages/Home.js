import React from "react";
import Navbar from "../navbar/Navbar";
import Flashcard from "./Flashcard";
import PublisedNavbar from "../others/PublisedNavbar";
import Path from "../others/Path";
import FAQ from "./FAQ";
import BreadCrumbs from "../others/BreadCrumbs";
import { breadcrumbs, tab } from "../../data";
const Home = () => {
  return (
    <>
      <div className="home-container ">
        <Navbar />
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        {/* <Flashcard tab={tab} /> */}
        {tab && <Flashcard tab={tab} />}
        <PublisedNavbar />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
