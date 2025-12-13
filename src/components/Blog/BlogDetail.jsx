import { useParams } from "react-router-dom";
import { blogs } from "./BlogData";

function BlogDetail() {
  const { blogId } = useParams();

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
