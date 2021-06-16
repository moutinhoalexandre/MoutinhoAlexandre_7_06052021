import React from 'react'
import avatar from '../../assets/avatar.jpeg'

export default function PostCard(props) {
    return (
      <>
        <div className="card">
          {props.image === null ? (
            <img className="card-img-top" src={avatar} alt="avatar" />
          ) : (
            <img className="card-img-top" src={props.image} alt="avatar" />
          )}
          <div className="card-body">
            <h5 className="card-title">{props.content}</h5>
            <p className="card-text">
              <span className="date_post text-muted">
                {" "}
                publié le{" "}
                {new Date(props.createdAt).toLocaleDateString("fr-FR")} à{" "}
                {new Date(props.createdAt).toLocaleTimeString("fr-FR")} par {props.postUsername}
              </span>
            </p>
          </div>
        </div>
      </>
    );
}
