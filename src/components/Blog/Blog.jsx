import { Link } from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import CodePic from "../../assets/software-dev.jpg";
import "./Blog.css";
const blogs = [
  { id: "web-development-tips", image: CodePic, title: "Top 5 Web Development Tips", content:"Learn the essential tips for building fast, responsive, and modern websites that delight users." },
  { id: "ai-in-software", image: CodePic, title: "How AI is Changing Software Development", content:"Explore how artificial intelligence is revolutionizing software development, from automation to smarter apps." },
  { id: "ai-in-software", image: CodePic, title: "How AI is Changing Software Development", content:"Explore how artificial intelligence is revolutionizing software development, from automation to smarter apps." },
  { id: "ai-in-software", image: CodePic, title: "How AI is Changing Software Development", content:"Explore how artificial intelligence is revolutionizing software development, from automation to smarter apps." },
  { id: "ai-in-software", image: CodePic,  title: "How AI is Changing Software Development", content:"Explore how artificial intelligence is revolutionizing software development, from automation to smarter apps." },
  { id: "ai-in-software", image: CodePic,  title: "How AI is Changing Software Development", content:"Explore how artificial intelligence is revolutionizing software development, from automation to smarter apps." },
   
];

function Blogs() {
  return (
    <div className="blogs-main-container">
      <span className="blog-head">Our Blogs</span>
      <p className="blog-intro">
        Discover the latest insights, tips, and guides from Goldsmith Softwares Limited your source for web development, software solutions, and professional consultations.
      </p>
      <div className="blogs-content">
        {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <img src={CodePic} className="blog-img" />
          <div className="card-details">
            <p className="blog-title">{blog.title}</p>
          <p className="blog-subtitle">{blog.content}</p>
           <Link to={`/blogs/${blog.id}`}>
             <button className="read-btn">Read More</button>
           </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
