"use client"
import React from 'react';
import { PostManagement } from './_components/PostManagement';
import { usePosts } from './hooks/usePosts';


export function Home() {
  const {
    posts,
    loading,
    error,
    handleCreatePost,
    handleUpdatePost,
    handleDeletePost
  } = usePosts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">

      <PostManagement
        posts={posts}
        onCreatePost={handleCreatePost}
        onUpdatePost={handleUpdatePost}
        onDeletePost={handleDeletePost}
      />
    </div>
  );
}

export default Home;