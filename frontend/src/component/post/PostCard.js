import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect} from 'react'
import "./PostCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments, faHeart
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function PostCard(props) {
    const postId = props.postId
    const username = props.postUsername
    const userId = props.userId
    const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(true);

const getLikes = () => {
  const token = localStorage.getItem("token");
    const userID = Number(localStorage.getItem("userId"));
  axios
    .get("http://localhost:3000/api/like/post/" + postId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setLikes(res.data);
      const likeOwner = likes.map( (like) => {
        return like.userId;
      });
      if (likeOwner.includes(userID)) {
        setIsLiked(false);
              console.log(isLiked);
      }
    })
    .catch((err) => {
      console.log(err);
      window.alert(
        "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
      );
    });
};
  
  useEffect(() => {

       getLikes();
     }, []);



  const doLike = () => {
    getLikes()
  const token = localStorage.getItem("token");
  axios
    .post("http://localhost:3000/api/like/post/" + postId, { like: isLiked }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      // window.location.reload();
      console.log(isLiked)
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
        <div className="card">
          <div className="d-flex justify-content-center">
            {props.image === null ? <div></div> : (
              <img className=" img-fluid " src={props.image} alt="avatar" />
            )}
          </div>

          <div className="card-body">
            <h5 className="card-title">{props.content}</h5>
            <p className="card-text">
              <span className="date_post text-muted">
                {" "}
                publié le{" "}
                {new Date(props.createdAt).toLocaleDateString("fr-FR")} à{" "}
                {new Date(props.createdAt).toLocaleTimeString("fr-FR")} par{" "}
                {props.postUsername}
              </span>
            </p>
            <div>
              {" "}
              {props.comments}
              <FontAwesomeIcon icon={faComments} className="comment" />
            </div>
            <div>
              {" "}
              {props.likes}
              <FontAwesomeIcon
                icon={faHeart}
                className="comment"
                onClick={doLike}
              />
            </div>
            <Link
              to={{
                pathname: "/postSelected/",
                state: { postId, username, userId },
              }}
              className="link"
            >
              <div className="d-flex justify-content-center">
                <button
                  className="bouton btn btn-sm mx-5 "
                  // onClick={handleSubmitModification}
                >
                  Voir le post
                </button>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
}
