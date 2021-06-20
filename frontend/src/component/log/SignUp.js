import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== controlPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Les passwords ne correspondent pas !!",
      });
    } else {
      try {
        const res = await axios({
          method: "post",
          url: `http://localhost:3000/api/auth/signup`,
          data: {
            username,
            email,
            password,
          },
        });
        Swal.fire({
          title: "Création de compte réussie",
          confirmButtonText: `SignIn`,
          confirmButtonColor: "#3085d6",
        }).then((result) => {
          if (result.isConfirmed) {
            props.func();
          }
        });
      } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username ou email déjà utilisé!",
        });
      }
    }
  };

  return (
    <>
      <form action="#" className="sign-up-form" onSubmit={handleRegister}>
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user">
            <FontAwesomeIcon icon={faUser} />
          </i>
          <input
            type="text"
            placeholder="Username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope">
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock">
            <FontAwesomeIcon icon={faLock} />
          </i>
          <input
            type="password"
            placeholder="Confirm password"
            className="input"
            value={controlPassword}
            onChange={(e) => setControlPassword(e.target.value)}
          />
        </div>
        <input type="submit" className="boutton" value="Sign up" />
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
