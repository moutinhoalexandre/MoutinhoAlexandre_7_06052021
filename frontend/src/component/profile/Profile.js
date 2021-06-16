import React from "react";
import "./Profile.css";
import ProfileUpdate from "./ProfileUpdate";
import Navbar from "../navbar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import button from "react-bootstrap/Button";
import avatar from "../../assets/avatar.jpeg";

export default function Profile() {
//   const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);
  const [displayModification, setDisplayModification] = useState(true);
    const [displayModificationPassword, setDisplayModificationPassword] = useState(true);
    
      const changeDisplayModification = () => {
        setDisplayModification(!displayModification);
      };
      const changeDisplayModificationPassword = () => {
        setDisplayModificationPassword(!displayModificationPassword);
      };

  const getOneProfile = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    axios
      .get("http://localhost:3000/api/auth/profile/" + userId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
        );
      });
  };

  //TODO: modifier fonction pour getAllProfileById
  //   const getAllPosts = () => {
  //     const token = localStorage.getItem("token");
  //     axios
  //       .get("http://localhost:3000/api/post", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         setPosts(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         alert(
  //           "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
  //         );
  //       });
  //   };

  useEffect(() => {
    getOneProfile();
    // getAllPostsById();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const imagedata = document.querySelector('input[type="file"]').files[0];
      formData.append("image", imagedata);
      

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    axios
      .put("http://localhost:3000/api/auth/profile/" + userId, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
        );
      });
  };

  return (
    <>
      <div className="bg-profilepage">
        <Navbar />
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-lg-8 mt-5 mx-5 rounded bg-profile">
            <div className="avatar rounded-circle mx-auto">
              {user.image === null ? (
                <img
                  className="rounded-circle"
                  height="150px"
                  src={avatar}
                  alt="avatar"
                />
              ) : (
                <img
                  className="rounded-circle"
                  height="150px"
                  src={user.image}
                  alt="avatar"
                />
              )}
            </div>
            <div className="text-center mt-4">
              <label className="label-file text-white mb-3" htmlFor="image">
                Choisir une image
              </label>
              <input
                name="image"
                id="image"
                className="input-file text-white"
                type="file"
                accept="image/*"
              ></input>
            </div>
            <div className="text-center">
              <button
                type="submit"
                button-file
                className="button-file btn p-2 mt-0 mb-4 me-2 text-white"
                onClick={handleSubmit}
              >
                Ajouter l'image
              </button>
            </div>
            <div className="pb-4 pe-4 ps-4 text-center">
              <h5 className=" text-white mb-4">Informations</h5>
              <div className="border-bottom text-white mb-2">Username</div>
              <div className="text-white mb-4">{user.username}</div>
              <div className="border-bottom text-white mb-2">Email</div>
              <div className="text-white mb-4">{user.email}</div>
              <div className="border-bottom text-white mb-2">Biographie</div>
              <div className="btn_delete text-white mb-4">
                {user.bio}
                <i
                  className="bi bi-pencil-square ms-2"
                  title="Modifier le poste"
                ></i>
              </div>

              <div className="border-bottom text-white mb-2">Mon compte</div>
              <button
                className="button-file btn btn-sm mx-5 text-white"
                onClick={changeDisplayModification}
              >
                Modifier mon compte
              </button>
              <button
                className="button-file btn btn-sm mx-5 text-white"
                onClick={changeDisplayModificationPassword}
              >
                Modifier mon password
              </button>
              <div className="button-file btn btn-outline-success btn-sm mx-5 text-white">
                Supprimer mon compte
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProfileUpdate
        funcModification={changeDisplayModification}
        funcPassword={changeDisplayModificationPassword}
        modProfile={displayModification}
        modPassword={displayModificationPassword}
      />
    </>
  );
}
