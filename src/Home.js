import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending , error} = useFetch(' http://localhost:8000/blogs');
  
   // as we have nested Bloglist here and and the data used in it is in array above so basically we cant do that we have so as data cant reach out 
   // we have 2 options for that , 1> to copy data and paste in bloglist.js or use Props


     

      
   
    


    return ( 
        <div className="home">
        {error && <div>{error} </div> }

        {isPending && <div> Loading </div>}
         
      { blogs && <Bloglist blogs ={blogs} title = "All Blogs" />  }
       
       
          </div>
     );
}
  // here blogs = {blogs}  is a prop , basically it means that blogs is been passed to bloglist
export default Home;