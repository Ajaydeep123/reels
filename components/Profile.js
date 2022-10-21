import React from "react"
import Navbar from "./Navbar"
import Image from "next/image";
import user from "../assets/avatar.jpeg"
function Profile() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="profile-intro">
          <div style={{
            height:"8rem",
           width:"8rem",
           clipPath: "circle(50%)" 
           }}>
            <Image src={user} />
            </div>
          <div>
            <h1>Ajaydeep</h1>
            <h1>Posts:12</h1>
          </div>
        </div>
        <hr />
        <div className="profile-posts">
            <video src="https://firebasestorage.googleapis.com/v0/b/reels-next.appspot.com/o/posts%2F9ccfcb74-0c49-4291-94a8-204c519e8ba6?alt=media&token=b0d93373-17f6-4fb5-a043-34db03ba8b59"/>
            <video src="https://firebasestorage.googleapis.com/v0/b/reels-next.appspot.com/o/posts%2F9ccfcb74-0c49-4291-94a8-204c519e8ba6?alt=media&token=b0d93373-17f6-4fb5-a043-34db03ba8b59"/>
            <video src="https://firebasestorage.googleapis.com/v0/b/reels-next.appspot.com/o/posts%2F9ccfcb74-0c49-4291-94a8-204c519e8ba6?alt=media&token=b0d93373-17f6-4fb5-a043-34db03ba8b59"/>

        </div>          
        </div>
      </div>
  );
}

export default Profile;