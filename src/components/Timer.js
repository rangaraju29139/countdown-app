import React from "react";
import "../styles/styles.css";

function Timer() {
  return (
    <>
      <section className="timer">
        <div className="timer-row-1">
          <i
            style={{ color: "white" }}
            className="fa-solid fa-up-right-and-down-left-from-center"
          ></i>
        </div>
        <div className="timer-row-2">
          <div className="timer-time" id="time">
            <span>00:00:10</span>
          </div>
        </div>
        <div className="timer-row-3 timer-controls">
          <div className="before-start">
            <div>
              <button id="start" className="before-start-button" name="start">
                Start
              </button>
            </div>
            <div>
              <button id="increase-time" className="before-start-button">
                +
              </button>
            </div>
            <div>
              <button id="decrease-time" className="before-start-button">
                -
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timer;
