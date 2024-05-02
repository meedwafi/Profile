import React from 'react';
import image from "./ramiPNG.PNG";
import './Profile.css'
//import { useParams } from 'react-router-dom';

export default function Post() {
    
  // Fetch post details using the id
  const post = { id: 1, title: "wafi rouchai", content: <img className="postImage" src={image} alt="User" />}; // Example data

  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
}
