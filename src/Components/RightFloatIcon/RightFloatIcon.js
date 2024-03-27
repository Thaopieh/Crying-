import React from "react";
import "../../Pages/MainPage/MainPage.css";

function RightFloatIcon() {
  return (
    <div>
      <div className="back-to-top">
        <button
          type="button"
          className="btn btn-danger btn-floating btn-lg"
          id="btn-back-to-top"
        >
          <i className="fas fa-arrow-up" id="mid" />
        </button>
      </div>
      <div className="service-chat">
        <button
          type="button"
          className="btn btn-danger btn-floating btn-lg"
          id="service-chat"
        >
          <i className="fa-solid fa-headset" id="mid" />
        </button>
      </div>
      <div className="chatbot">
        <button
          type="button"
          className="btn btn-danger btn-floating btn-lg"
          id="chatbot"
        >
          <i className="fa-solid fa-robot" id="mid" />
        </button>
      </div>
    </div>
  );
}

export default RightFloatIcon;
