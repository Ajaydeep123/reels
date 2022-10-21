import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image';
import user from '../assets/image.jpg'
function Profile() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="profile-intro">
          <div style={{height:"8rem", width:"8rem",borderRadius:"50%"}}>
            <Image src={user} />
                  </div>
                  <div>
                      <h1>Ajaydeep</h1>
                      <h1>Posts:12</h1>
                  </div>

        </div>
        <div className="profile-posts"></div>
      </div>
    </div>
  );
}

export default Profile