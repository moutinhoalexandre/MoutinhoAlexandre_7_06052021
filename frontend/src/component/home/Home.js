import React from 'react'
// import "../styles/Forum.css";
// import Banner from "./Banner";
// import Footer from "./Footer";
// import PostItem from "./PostItem";
// import ProfileCard from "./ProfileCard";
// import NewPost from "./NewPost";
// import MemberItem from "./MemberItem";
// import MemberItem2 from "./MemberItem2";
import axios from "axios";
import { useState} from "react"


export default function Home(){
const [users, setUsers] = useState()
const [posts, setPosts] = useState()
  const [user, setUser] = useState({})
  console.log(users)

    function getAllProfile () {
        const token = localStorage.getItem("token");

        axios
          .get("http://localhost:3000/api/auth/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            setUsers([res.data]);
          })
          .catch((err) => {
            console.log(err);
            window.alert(
              "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
            );
          });
    }

    function getAllPosts () {
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
    }

    function getOneProfile() {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user.id");

        axios
          .get("http://localhost:3000/api/auth/profile/:id", {
            headers: {
              Authorization: `Bearer ${token}`,
              },
              params: {
                  id: {user}
              }
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
    }

    // function addPost(post) {
    //     let { posts } = this.state;
    //     let addNewPost = [post, ...posts]
    //     this.setState({ posts: addNewPost }, () =>
    //     console.log(this.state.posts))   
    // }

    // function deletePost(postId) {
    //     let { posts } = this.state;
    //     posts = posts.filter(post => post.id !== postId);
    //     this.setState({ posts });
    // }



        return  (
            <div>
                {/* <Banner /> */}
                <div className="row justify-content-center ">
                    <div className="col-12 col-lg-3 ">
                <div>
                  <div>{user.username }</div>
                            {/* <ProfileCard
                                name={user.UserName}
                                image={user.UserImage}
                                job={user.job}
                            /> */}
                        </div>
                        <div className='membres fw-bold mb-2 ms-2 '>MEMBRES</div>
                        {/* <div className='scroll2 member-list border rounded p-2 ms-2 bg-white'>
                            {users.map(({ name, id, job, image, email }) => (
                                <div key={id}>
                                    <MemberItem
                                        name={name}
                                        member_id={id}
                                        job={job}
                                        image={image}
                                        email={email}
                                    />
                                </div>
                            ))}
                        </div> */}
                        <div className='scroll3 member-list2 d-flex ms-2 mb-3 p-2 bg-white'>
                            {/* {users.map(({ name, id, job, image, email }) => (
                                <div key={id}>
                                    <MemberItem2
                                        name={name}
                                        member_id={id}
                                        job={job}
                                        image={image}
                                        email={email}
                                    />
                                </div>
                            ))} */}
                        </div>
                    </div>
                        
                    <div className="col-12 col-lg-9">
                        {/* <NewPost user={user} addPost={this.addPost} currentUserImage={user.UserImage} id={user.UserId} /> */}
                        <div className='last-post pt-3 pb-3 ms-2 fw-bold'>DERNIERS POSTS</div>
                        {/* <div className='scroll post-list'>
                            {posts.map(post=> (
                                <div className="border rounded ms-2 mb-4 bg-white" key={post.id}>
                                    <PostItem                             
                                        post={post}
                                        user={user}
                                        id={post.User.id}                                       
                                        name={post.User.name}
                                        image={post.User.image}
                                        role={post.User.role}
                                        currentUserId={user.UserId}
                                        currentUserRole= {user.UserRole}
                                        currentUserImage= {user.UserImage}
                                        deletePost= {this.deletePost}
                                    />
                                </div>
                            ))}   
                        </div> */}
                    </div>   
                </div>
                {/* <Footer /> */}
            </div>
            )
}

