import React from 'react'
import {Link} from 'react-router-dom'

export default function ProfileCardMember(props) {

    const userId = props.user.id
    console.log(userId)
    return (
        <>
           <Link
                className="link"
                to={{
                  pathname: "/profileSelected/",
                  state: { userId },
                }}
              >
                <div className="d-flex justify-content-center">
                  <div className="card cardMember mt-2 mx-0 border-0 ">
                    <div className="d-flex justify-content-center">
                      <img
                        src={props.user.image}
                        className="img-fluid imageMember"
                        alt="avatar"
                      />
                    </div>
                    <div className="card-body d-flex justify-content-center p-0 mt-2">
                      <p className="card-title">{props.user.username}</p>
                    </div>
                  </div>
                </div>
              </Link> 
        </>
    )
}
