import "./Comment.css";
export default function Comment(){
  return(
      <section className="comments-main-section">
        <span className="comment-head">Comment</span>
        <form className="comment-details">
           <textarea 
             placeholder="Write Your Comment on this"    
           />
           <button
            className="post-btn"
           >
            Post Comment
           </button>
        </form>
     </section>
  )
}