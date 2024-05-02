import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import image from "./ramiPNG.PNG"; // Assuming this is your user's profile image
import './bio.css';
import './posts';
import Post from './posts';
//import Post from './posts';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFriends: true // Initially show friend list
    };
  }

  toggleSection = (section) => {
    if (section === 'friends') {
      this.setState({ showFriends: true });
    } else if (section === 'posts') {
      this.setState({ showFriends: false });
    }
  };

  render() {
    const username = "wafi rouchai"; // Assuming this is your user's name
    const friends = ["ryad", "rassim", "issam"]; // Assuming this is your user's friend list

    return (
      <div className="profileContainer">
        <div className="profileDetails">
          <img className="profileImage" src={image} alt="User" />
          <h2>{username}</h2>
          <div className="bioText">
            <p>{/* Display user's bio here */}</p>
          </div>
          <input
            type="text"
            // value={/* user bio here */}
           // onChange={ handleBioChange }
            className="editbio"
            placeholder="No bio yet..."
          />
          <Link to="/profile/edit">
            <button>Edit Profile</button>
          </Link>
        </div>
        <div className="toggleContainer">
          <button onClick={() => this.toggleSection('friends')} className={this.state.showFriends ? 'activeToggle' : ''}>Friends</button>
          <button onClick={() => this.toggleSection('posts')} className={!this.state.showFriends ? 'activeToggle' : ''}>Posts</button>
        </div>
        <div className="friendList" style={{ display: this.state.showFriends ? 'block' : 'none' }}>
          <h3>Friends</h3>
          {friends.map((friend, index) => (
            <div key={index} className="friendItem">
              {friend}
            </div>
          ))}
        </div>
        <div className="postList" style={{ display: !this.state.showFriends ? 'block' : 'none' }}>
          {/* Render posts here */}
          <div>
          <Post/>
          </div>
              
          {/* Add more posts as needed */}
        </div>
      </div>
    );
  }
}

export default Profile;
