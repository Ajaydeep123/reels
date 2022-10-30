import { Avatar } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import CircularProgress from "@mui/material/CircularProgress";

function DisplayComments({ postData }) {
  const [allComments, setAllComments] = useState(null);

  useEffect( () => {
    getComments();
  }, [postData]);

  function getComments() {
    let tempArray = [];
    postData.comments.map(async (commentId) => {
      const docSnap = await getDoc(doc(db, "comments", commentId));
      tempArray.push(docSnap.data());
      setAllComments(tempArray);
    });
  }
  return (
    <div>
      {allComments == null ? (
        <CircularProgress color="success" />
      ) : (
        <>
          {allComments.map((commentObj,index) => {
            return (
              <div key={index} style={{ display: "flex", flexDirection:"row", alignItems:"center"}}>
                <Avatar src={commentObj.userDP} sx={{marginRight:"0.50rem"}} />               
                <p style={{marginTop:"0.75rem", marginBottom:"0.75rem", }}>
               
               <span style={{fontWeight:"500", marginRight:"0.5rem"}}>{commentObj.userName  }</span>
              <span style={{fontWeight:"300"}}>{commentObj.text}</span> 
             </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default DisplayComments;