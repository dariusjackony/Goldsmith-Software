import { useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {Link} from "react-router-dom";
import { blogs } from "./BlogData";
import Comment from "./Comment/Comment";
function BlogDetail() {
  const { blogId } = useParams();

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <span>Blog not found</span>;
  }

  return (
    <section className="bg-blue-950 text-white px-4 ">
        <Link to={`/blogs`} className="">
          <p className="text-2xl font-bold" > <FiArrowLeft /> </p>
        </Link>
        <div className="mt-5">
          <span className="font-bold text-2xl">{blog.title}</span>
          <p className="mt-2  text-gray-200 ">{blog.content}</p>
        </div>
        <Comment />
    </section>
  );
}

export default BlogDetail;
