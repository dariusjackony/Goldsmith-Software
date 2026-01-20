import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CodePic from "../../assets/software-dev.jpg";
import Button from "../Button";
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect( () => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs/`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log("Error fetching blogs:", err));
  },[]);
  return (
    <div className="px-4 mt-5 mb-5">
      <div className="md:text-center lg:text-center">
        <span className="text-2xl">Our Blogs</span>
        <p className="mt-2 text-gray-700 lg:max-w-[900px] lg:m-auto lg:mt-3 md:max-w-[600px] md:mt-2 md:m-auto ">
          Discover the latest insights, tips, and guides from Goldsmith Softwares Limited your source for web development, software solutions, and professional consultations.
        </p>
      </div>
      <div className="mt-5 lg:grid lg:grid-cols-3 lg:place-items-center md:grid md:grid-cols-2  md:place-items-center">
        {blogs.map((blog) => (
        <div key={blog.id} className="bg-blue-950 text-white mt-5 relative overflow-hidden shadow-lg rounded-lg
         lg:max-w-[400px] md:max-w-[300px]">
          <img src={CodePic} className="w-full lg:h-55 object-cover" />
          <div className="p-3">
            <p className="font-bold">{blog.title}</p>
          <p className="mt-2">{blog.slug}</p>
           <Link to={`/blogs/${blog.id}`}>
             <Button>
               Read More
             </Button>
           </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
