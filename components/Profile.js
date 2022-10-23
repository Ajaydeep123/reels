import React, { useContext,useEffect, useState } from "react";
import Navbar from "./Navbar"
import Image from "next/image";
import user from "../assets/avatar.jpeg"
import { AuthContext } from "../context/auth";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
function Profile() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(user.uid);
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      setUserData(doc.data());
    });
    return () => {
      unsub();
    };
  }, [user]);

  // const myLoader = ({ src }) => {
  //   return `${userData.downloadURL}`;
  // };
  return (
    <div>
      <Navbar  userData={userData} />
      <div>
        <div className="profile-intro">
          <div style={{
            height:"8rem",
           width:"8rem",
           clipPath: "circle(50%)" 
           }}>
            {/* <Image src={userData.downloadURL} /> */}            
             <img src={userData?.downloadURL} style={{height:"8rem",width:"8rem",borderRadius:"50%"}}/>
            </div>
          <div>
            {/* <h1>Ajaydeep</h1>
            <h1>Posts:12</h1> */}
            <h1>{userData.fullName}</h1>
            <h1>Posts:{userData?.posts?.length}</h1>
            
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