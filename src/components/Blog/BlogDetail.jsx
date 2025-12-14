import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { blogs } from "./BlogData";
import Comment from "./Comment/Comment";
import "./BlogDetails.css";
function BlogDetail() {
  const { blogId } = useParams();

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <span>Blog not found</span>;
  }

  return (
    <section className="blog-details-main-container">
        <Link to={`/blogs`} className="back-link">
          <span >Back to Blogs</span>
        </Link>
        <div className="blog-details-content">
          <span className="blog-main-title">{blog.title}</span>
          <p className="blog-description">{blog.content}</p>
        </div>
        <Comment />
    </section>
  );
}

export default BlogDetail;
