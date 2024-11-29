
import { Post, PostCreateDTO } from '@/app/lib/interface';
import { message } from 'antd';
import { postService } from '../services/postService';

export const createPost = async (
  data: PostCreateDTO,
  onSuccess: (post: Post) => void
) => {
  try {
    const newPost = await postService.create(data);
    message.success('Post created successfully');
    onSuccess(newPost);
  } catch (error) {
    message.error('Failed to create post');
    throw error;
  }
};