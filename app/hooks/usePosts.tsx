import { Post, PostCreateDTO } from '@/app/lib/interface';
import { useEffect, useState } from 'react';
import { createPost } from '../features/postCreate';
import { deletePost } from '../features/postDelete';
import { updatePost } from '../features/postUpdate';
import { postService } from '../services/postService';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const fetchedPosts = await postService.fetchAll();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Failed to fetch posts', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (postData: PostCreateDTO) => {
    try {
      const newPost = await createPost(postData, (post) => {
        setPosts(prev => [...prev, post]);
      });
    } catch (error) {
      console.error('Create post failed', error);
    }
  };

  const handleUpdatePost = async (id: number, postData: Partial<Post>) => {
    try {
      await updatePost(id, postData, (updatedPost) => {
        setPosts(prev =>
          prev.map(post => post.id === id ? updatedPost : post)
        );
      });
    } catch (error) {
      console.error('Update post failed', error);
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      await deletePost(id, () => {
        setPosts(prev => prev.filter(post => post.id !== id));
      });
    } catch (error) {
      console.error('Delete post failed', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    createPost: handleCreatePost,
    updatePost: handleUpdatePost,
    deletePost: handleDeletePost,
  };
};