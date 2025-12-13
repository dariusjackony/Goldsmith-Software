import { Link } from "react-router-dom";

const blogs = [
  { id: "react-hooks", title: "Understanding React Hooks", content:"This is the content about react hooks" },
  { id: "vite-guide", title: "Vite Complete Guide", content:"This is the guide to learning react vite" },
];

function Blogs() {
  return (
    <div>
      <h1>Blogs</h1>

      {blogs.map((blog) => (
        <Link key={blog.id} to={`/blogs/${blog.id}`}>
          <h3>{blog.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default Blogs;
