import React from "react";
import { useEffect } from "react";
import "./Home.css";
// import Banner from "./Banner";
// import Footer from "./Footer";
import PostCard from "../post/PostCard";
import ProfileCard from "../profile/ProfileCard";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();

  const getAllProfile = () => {
    axios
      .get("http://localhost:3000/api/auth/profile")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
        );
      });
  };

  const getOneProfile = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("userId");

    axios
      .get("http://localhost:3000/api/auth/profile/"+user, {
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

  const getAllPosts = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/post", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
        );
      });
  };

  useEffect(() => {
    getAllProfile();
    getAllPosts();
getOneProfile() ;
  },[]);

  // console.log(users)
  console.log(user);
  // console.log(posts);

  return (
    <div>
      {/* <Banner /> */}
      <div className="row justify-content-center ">
        <div className="col-12 col-lg-3 ">
          <div>
            <ProfileCard
              name={user.username}
              image={user.image}
            />
          </div>
          <div className="membres fw-bold mb-2 ms-2 ">MEMBRES</div>
        </div>

        <div className="col-12 col-lg-9">
          <div className="last-post pt-3 pb-3 ms-2 fw-bold">DERNIERS POSTS</div>
          <div className=" post-list">
            {posts.map((post) => (
              <div className="border rounded ms-2 mb-4 bg-white" key={post.id}>
                <PostCard
                  content={post.content}
                  image={post.image}
                  createdAt={post.createdAt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
