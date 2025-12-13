import { useParams } from "react-router-dom";
import { blogs } from "./BlogData";
import "./BlogDetails.css";
function BlogDetail() {
  const { blogId } = useParams();

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <span>Blog not found</span>;
  }

  return (
    <section className="blog-details-main-container">
        <span>Wlecome to Blogs</span>
        <div className="blog-details-content">
          <span>{blog.title}</span>
          <p>{blog.content}</p>
        </div>
    </section>
  );
}

export default BlogDetail;
