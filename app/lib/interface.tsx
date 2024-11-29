
export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostCreateDTO {
  title: string;
  body: string;
}