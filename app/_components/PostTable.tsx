import { Post } from '@/app/lib/interface';
import { Button, Table } from 'antd';
import React from 'react';

interface PostTableProps {
  posts: Post[];
  loading: boolean;
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
}

export const PostTable: React.FC<PostTableProps> = ({
  posts,
  loading,
  onEdit,
  onDelete
}) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: Post) => (
        <div className="flex">
          <Button
            type="primary"
            onClick={() => onEdit(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            type="danger"
            onClick={() => onDelete(record.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={posts}
      rowKey="id"
      loading={loading}
    />
  );
};