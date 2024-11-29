import { Post, PostCreateDTO } from "@/app/lib/interface";

export const postService = {
  async fetchAll(): Promise<Post[]> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch posts", error);
      throw error;
    }
  },

  async create(data: PostCreateDTO): Promise<Post> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Failed to create post", error);
      throw error;
    }
  },

  async update(id: number, data: Partial<Post>): Promise<Post> {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Failed to update post", error);
      throw error;
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error("Failed to delete post", error);
      throw error;
    }
  }
};