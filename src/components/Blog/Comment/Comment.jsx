import Button from "../../Button";
export default function Comment(){
  return(
      <section className="mt-10">
        <span className="font-bold lg:text-2xl">Comment</span>
        <form className="mt-5">
           <textarea className=" bg-slate-700 w-full text-white placeholder-gray-100 rounded-md p-3
                       focus:outline-none  resize-none lg:w-1/3 md:w-1/2"
             placeholder="Write Your Comment on this"    
           />
        </form>
         <Button>
             Post Comment
         </Button>
     </section>
  )
}