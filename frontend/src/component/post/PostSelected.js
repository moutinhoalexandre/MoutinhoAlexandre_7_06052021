import React from "react";
import NavBar from "../navbar/NavBar";
import Comments from "../comments/Comments";
import CommentNew from "../comments/CommentNew";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import button from "react-bootstrap/Button";
import "./PostSelected.css";
import Swal from "sweetalert2";

export default function PostSelected({ match, props }) {
  const [post, setPost] = useState([]);
  const location = useLocation(props);
  const postId = location.state?.postId;
  const username = location.state?.username;
  const userId = location.state?.userId;
  const localUserId = localStorage.getItem("userId");
    const isAdmin = localStorage.getItem("is_admin");
    console.log(postId)

  const getOnePost = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:3000/api/post/" + postId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
        );
      });
  };

  function deletePost() {
    Swal.fire({
      title: "Êtes-vous sûr(e) ?",
      text: "Une fois supprimé, vous ne pourrez plus récupérez le post et ces commentaires associés",
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Supprimer",
      denyButtonText: "Annuler",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");

        axios
          .delete("http://localhost:3000/api/post/" + postId, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            window.location = "/Home";
          })
          .catch((err) => {
            console.log(err);
            window.alert(
              "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
            );
          });
      }
    });
  }

  useEffect(() => {
    getOnePost();
  }, []);

    const [comments, setComments] = useState([]);
    
    console.log(comments)


  const getAllComments = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:3000/api/comment/" + postId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
        );
      });
  };
  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <>
      <NavBar />
      <div className="row d-flex justify-content-center">
        <div className=" col-10 col-lg-8 mt-5 mx-5 mb-3 rounded ">
          <div className="card">
            <div className="d-flex justify-content-center">
              {post.image === null ? (
                <div></div>
              ) : (<img
                className="img-fluid"
                key={"image" + postId}
                src={post.image}
                alt="avatar"
              />
              )}

            </div>
            <div className="card-body">
              <h5 className="card-title" key={"content" + postId}>
                {post.content}
              </h5>
              <p className="card-text">
                <span className="date_post text-muted" key={"date" + postId}>
                  {" "}
                  publié le{" "}
                  {new Date(post.createdAt).toLocaleDateString("fr-FR")} à{" "}
                  {new Date(post.createdAt).toLocaleTimeString("fr-FR")} par{" "}
                  {username}
                </span>
              </p>
            </div>
            <div
              className={
                userId == localUserId
                  ? "d-flex justify-content-center"
                  : isAdmin === "true"
                  ? "d-flex justify-content-center"
                  : "displayNone"
              }
            >
              <button className="bouton btn btn-sm mx-5" onClick={deletePost}>
                Supprimer le post
              </button>
            </div>
          </div>
          <CommentNew postId={postId} />
          <div
            className={
              comments.length == 0
                ? "displayNone"
                : " mt-2 p-2 pb-1 px-3 comments"
            }
          >
            {comments.map((comment) => (
              <Comments
                postId={postId}
                content={comment.content}
                user={comment.User.username}
                userId={comment.userId}
                id={comment.id}
                createdAt={comment.createdAt}
                key={comment.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
