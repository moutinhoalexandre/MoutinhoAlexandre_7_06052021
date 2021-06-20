import React from 'react'
import { Link } from "react-router-dom";
import "./PostCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
} from "@fortawesome/free-solid-svg-icons";

export default function PostCard(props) {
    const postId = props.postId
    const username = props.postUsername
    const userId = props.userId
    return (
      <>
        <div className="card">
          <div className="d-flex justify-content-center">
            <img className=" img-fluid " src={props.image} alt="avatar" />
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
            <div> {props.comments}
              <FontAwesomeIcon
                icon={faComments}
                className="comment"
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
