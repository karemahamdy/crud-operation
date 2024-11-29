import { Modal, message } from 'antd';
import { postService } from '../services/postService';

export const deletePost = async (
  id: number,
  onSuccess: () => void
) => {
  Modal.confirm({
    title: 'Are you sure you want to delete this post?',
    content: 'This action cannot be undone',
    okText: 'Yes, Delete',
    okButtonProps: { danger: true },
    cancelText: 'Cancel',
    onOk: async () => {
      try {
        await postService.delete(id);
        message.success('Post deleted successfully');
        onSuccess();
      } catch (error) {
        message.error('Failed to delete post');
        console.error(error);
      }
    },
    onCancel: () => {
    }
  });
};