import Button from "../../Button";
export default function Comment(){
  return(
      <section className="mt-10">
        <span className="font-bold lg:text-2xl">Comment</span>
        <form className="mt-5">
           <textarea className=" bg-blue-900 w-full focus:outline-none rounded-lg p-5 lg:w-1/3 md:w-1/2"
             placeholder="Write Your Comment on this"    
           />
        </form>
         <Button>
             Post Comment
         </Button>
     </section>
  )
}