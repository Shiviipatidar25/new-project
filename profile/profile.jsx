import React from "react";
import "./profile.css";

import cap2 from "../../assets/cap2.png";

import cele from '../../assets/cele.png'
import icon from "../../assets/Icon.png"

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profile-info">
          <div className="profile-icon">
            <img src={cap2} alt="" />
            
          </div>
          <div className="profile-details">
            <h3>Raj Kumar</h3>
            <p>Email Address: example@gmail.com</p>
            <p>Phone Number: 1234567890</p>
          </div>
          <div className="profile-dob">
            <h3>DOB: 17 Jul <img src={cele} alt="" />  </h3>
            <div className="edit-details"> Edit Details <img src={icon} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
