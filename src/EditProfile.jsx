import React from 'react';
//import { useState } from 'react'
import './EditProfile.css';

const EditProfile = ({ user, setUser }) => {
  //const [firstName, setFirstName] = useState(user.firstName);
  //const [lastName, setLastName] = useState(user.lastName);
  //const [profileImage, setProfileImage] = useState(user.profileImage);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Save changes here
  //   const updatedUser = { ...user, firstName, lastName, profileImage };
  //   setUser(updatedUser);
  // };

  // const handleFirstNameChange = (event) => {
  //   setFirstName(event.target.value);
  // };

  // const handleLastNameChange = (event) => {
  //   setLastName(event.target.value);
  // };

  // const handleImageChange = (event) => {
  //   const imageFile = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setProfileImage(reader.result);
  //   };
  //   if (imageFile) {
  //     reader.readAsDataURL(imageFile);
  //   }
  // };

  return (
    <form className="editProfileForm">
      <label>
        First Name:
        <input
          type="text"
          value="Med"
          //onChange={handleFirstNameChange}
          className="editProfileInput"
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value="Waffy"
          //onChange={handleLastNameChange}
          className="editProfileInput"
        />
      </label>
      <label>
        Profile Image:
        <input
          type="file"
          accept="image/*"
          //onChange={handleImageChange}
          className="editProfileInput"
        />
      </label>
      <button type="submit" className="editProfileButton">Save Changes</button>
    </form>
  );
};

export default EditProfile;
