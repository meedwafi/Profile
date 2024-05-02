// components/PostList.js
import React from 'react';
import PostPreview from './PostPreview';

function PostList() {
  // Fetch posts from API or use sample data
  const posts = [
    { id: 1, title: 'Post 1', content: 'Content of post 1' },
    { id: 2, title: 'Post 2', content: 'Content of post 2' },
    { id: 3, title: 'Post 3', content: 'Content of post 3' },
  ];

  return (
    <div>
      {posts.map(post => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
