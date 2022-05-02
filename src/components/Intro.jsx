import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../style/Intro.css";
import imageMobile from "../images/image-hero-mobile.png";
import imagesDesktop from "../images/image-hero-desktop.png";
import audiophile from "../images/client-audiophile.svg";
import databiz from "../images/client-databiz.svg";
import maker from "../images/client-maker.svg";
import meet from "../images/client-meet.svg";

const Intro = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const getWidthSize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", getWidthSize);

    return () => {
      window.removeEventListener("resize", getWidthSize);
    };
  }, []);
  return (
    <section className="intro">
      <img className="intro-banner" src={imageMobile} alt="" />
      <h1 className="intro-header">Make remote work</h1>
      <p className="intro-desctiption">
        Get your team in sync, no matter yor location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <a className="intro-btn" href="/more">
        Learn more
      </a>
      <ul className="intro-list">
        <li className="intro-company">
          <img src={databiz} alt="databiz" />
        </li>
        <li className="intro-company">
          <img src={audiophile} alt="audiophile" />
        </li>
        <li className="intro-company">
          <img src={meet} alt="meet" />
        </li>
        <li className="intro-company">
          <img src={maker} alt="maker" />
        </li>
      </ul>
    </section>
  );
};

export default Intro;
