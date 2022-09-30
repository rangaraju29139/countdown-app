import React from "react";
import "../styles/styles.css";
import headerImg from "../assets/images/timer-icon.png";

function Header() {
  return (
    <>
      <section className="header">
        <div className="header-left">
          <div className="header-img ">
            <img src={headerImg} alt="header-img"></img>
          </div>
          <div className="header-name">CountDown App</div>
        </div>
      </section>
    </>
  );
}

export default Header;
