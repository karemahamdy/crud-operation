import { Post, PostCreateDTO } from '@/app/lib/interface';
import { Button } from 'antd';
import React, { useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { PostForm } from './PostForm';
import { PostTable } from './PostTable';

export const PostManagement: React.FC = () => {
  const {
    posts,
    loading,
    createPost,
    updatePost,
    deletePost
  } = usePosts();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const handleCreateNewClick = () => {
    setEditingPost(null);
    setIsModalVisible(true);
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setIsModalVisible(true);
  };

  const handleSubmit = (formData: PostCreateDTO) => {
    if (editingPost) {
      updatePost(editingPost.id, formData);
    } else {  
      createPost(formData);
    }
    setIsModalVisible(false);
    setEditingPost(null);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={handleCreateNewClick}
        style={{ marginBottom: 16 }}
      >
        Create New Post
      </Button>

      <PostTable
        posts={posts}
        loading={loading}
        onEdit={handleEdit}
        onDelete={deletePost}
      />

      <PostForm
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingPost(null);
        }}
        onSubmit={handleSubmit}
        initialValues={editingPost || undefined}
      />
    </div>
  );
};