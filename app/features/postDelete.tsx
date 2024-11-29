import { message } from 'antd';
import { postService } from '../services/postService';

export const deletePost = async (
  id: number,
  onSuccess: () => void
) => {
  try {
    await postService.delete(id);
    message.success('Post deleted successfully');
    onSuccess();
  } catch (error) {
    message.error('Failed to delete post');
    throw error;
  }
};