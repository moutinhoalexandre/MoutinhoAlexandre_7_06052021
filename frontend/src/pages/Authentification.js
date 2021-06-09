import React from "react";
import Log from "../components/Log/Index";
import img from "../assets/icon-above-font.svg"

const Authentification = () => {

  return (
    <div className="profil-page">
        <div className="log-container">
          <Log signin={false} signup={true} />
        <div className="img-container">
            <img src={img} alt="img-log" />
          </div>
        </div>
    </div>
  );
};

export default Authentification;
