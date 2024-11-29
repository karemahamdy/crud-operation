import { Post } from '@/app/lib/interface';
import { message } from 'antd';
import { postService } from '../services/postService';

export const updatePost = async (
  id: number,
  data: Partial<Post>,
  onSuccess: (updatedPost: Post) => void
) => {
  try {
    const updatedPost = await postService.update(id, data);
    message.success('Post updated successfully');
    onSuccess(updatedPost);
  } catch (error) {
    message.error('Failed to update post');
    throw error;
  }
};
