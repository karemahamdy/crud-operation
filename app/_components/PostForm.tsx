import { Post, PostCreateDTO } from '@/app/lib/interface';
import { Form, Input, Modal } from 'antd';
import React from 'react';

interface PostFormProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values: PostCreateDTO) => void;
  initialValues?: Partial<Post>;
}

export const PostForm: React.FC<PostFormProps> = ({
  visible,
  onCancel,
  onSubmit,
  initialValues
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (visible) {
        form.resetFields();
      if (initialValues) {
        form.setFieldsValue(initialValues);
      }
    }
  }, [visible, initialValues, form]);

  const handleSubmit = () => {
    form.validateFields()
      .then((values: PostCreateDTO) => {
        onSubmit(values);
        onCancel();
      
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.error('Validation Failed:', errorInfo);
      });
  };

  return (
    <Modal
      title={initialValues ? "Edit Post" : "Create New Post"}
      open={visible}
      onOk={handleSubmit}
      onCancel={() => {
        onCancel();
        form.resetFields(); 
      }}
    
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
      
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="body"
          label="Body"
          rules={[{ required: true, message: 'Please input the body' }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};