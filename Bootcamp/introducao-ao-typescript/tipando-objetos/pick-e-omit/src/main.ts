interface Post {
  id: number;
  title: string;
  description: string;
}

// Pick
/*
type PostPreview = Pick<Post, "id" | "title">;

let post: PostPreview = {
  id: 1,
  title: "Título do post"
};

post.id;
post.title;
*/

// Omit
type PostPreview = Omit<Post, "id" | "title">;

let post: PostPreview = {
  description: "Descrição"
};

post.description;