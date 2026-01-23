import { useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {Link} from "react-router-dom"; 
import Comment from "./Comment/Comment";
import { useEffect, useState } from "react";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect( () =>{
    fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`)
     .then((res) => res.json())
     .then((data) => setBlog(data))
     .catch((error) => console.log(err))
  },[id])
  

  if (!blog) {
    return <span>Blog not found</span>;
  }

  return (
    <section className="bg-blue-950 min-h-screen text-white px-4 ">
        <Link to={`/blogs`} className="">
          <p className="text-2xl font-bold" > <FiArrowLeft /> </p>
        </Link>
        <div className="mt-6 max-w-4xl mx-auto text-center text-left">
          <h1 className="font-extrabold text-3xl md:text-4xl text-white leading-tight">
            {blog.title}
          </h1>

          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
       </div>

        <Comment />
    </section>
  );
}

export default BlogDetail;
