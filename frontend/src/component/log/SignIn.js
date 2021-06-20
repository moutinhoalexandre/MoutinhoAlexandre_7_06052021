import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./SignIn.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/login", { email, password })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("userId", res.data.userId);
        window.localStorage.setItem("is_admin", res.data.is_admin);
        window.location = "/Home";
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email ou password incorrect !!",
        });
      });
  };

  return (
    <>
      <form action="#" className="sign-in-form" onSubmit={handleLogin}>
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user">
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
          <input
            type="text"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock">
            <FontAwesomeIcon icon={faLock} />
          </i>
          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Login" className="boutton solid" />
        <p className="social-text">
          Coming Soon : sign in with social platforms
        </p>
        <div className="social-media">
          <a href="#top" className="social-icon">
            <i className="fab fa-facebook-f">
              <FontAwesomeIcon icon={faFacebookF} />
            </i>
          </a>
          <a href="#top" className="social-icon">
            <i className="fab fa-twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </i>
          </a>
          <a href="#top" className="social-icon">
            <i className="fab fa-google">
              <FontAwesomeIcon icon={faGoogle} />
            </i>
          </a>
          <a href="#top" className="social-icon">
            <i className="fab fa-linkedin-in">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </i>
          </a>
        </div>
      </form>
    </>
  );
}
