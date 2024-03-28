import React, { useState } from "react";
import restarticon from "../../img/restarticon.svg";
import goaheadicon from "../../img/goaheadicon.svg";
import gobackicon from "../../img/gobackicon.svg";
import bigscreenicon from "../../img/bigscreenicon.svg";
import lighticon from "../../img/lighticon.svg";
import soundicon from "../../img/soundicon.svg";

function Flashcard({ tab }) {
  const [activeTab, setActiveTab] = useState(tab[0].id);
  const currentTabNumber = Number(activeTab);
  const totalTabs = tab.length;

  const nextSlideButton = () => {
    setActiveTab(
      activeTab === tab.length.toString() ? "1" : String(Number(activeTab) + 1)
    );
  };

  const prvSlideButton = () => {
    setActiveTab(
      activeTab === "1" ? tab.length.toString() : String(Number(activeTab) - 1)
    );
  };

  const restartSlides = () => {
    setActiveTab(tab[0].id);
  };

  const listTitles = tab.map((item) => (
    <li
      key={item.id}
      onClick={() => setActiveTab(item.id)}
      className={
        activeTab === item.id ? "tab-title tab-title--active" : "tab-title"
      }
    >
      {item.tabTitle}
    </li>
  ));

  const listContent = tab.map((item) => (
    <p
      key={item.id}
      style={{ display: activeTab === item.id ? "block" : "none" }}
    >
      {item.tabContent}
    </p>
  ));

  const toggleFullScreen = () => {
    // const element = document.documentElement;
    const element = document.getElementById("content");

    const fullScreen = document.fullscreenElement;
    if (!fullScreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <>
      <div className="center-tab">
        <h1>Relations and Functions (Mathematics)</h1>
      </div>
      <div className="tabs" id="tabs">
        <ul className="tabs-titles">{listTitles}</ul>
        <div className="join-tab-arrowbutton">
          <div className="tab-content" id="content">
            {listContent}
            <div className="lighticon-soundicon">
              <img
                src={lighticon}
                alt=""
                onClick={nextSlideButton}
                className="lightimg"
              />
              <img
                src={soundicon}
                alt=""
                onClick={nextSlideButton}
                className="soundimg"
              />
            </div>
          </div>
          <div className="center-img-carousal">
            <div className="arrow-silde">
              <img
                src={restarticon}
                alt=""
                className="img-size-before"
                onClick={restartSlides}
              />
              <div className="arrow-silde-center">
                <img
                  src={gobackicon}
                  alt=""
                  onClick={prvSlideButton}
                  className="img-size"
                />
                <text className="text">{`${currentTabNumber}/${totalTabs}`}</text>
                <img
                  src={goaheadicon}
                  alt=""
                  onClick={nextSlideButton}
                  className="img-size"
                />
              </div>
              <img
                src={bigscreenicon}
                alt=""
                className="img-size-before"
                onClick={toggleFullScreen}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flashcard;
