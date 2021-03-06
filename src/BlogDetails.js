import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const { data: blog, error, isPending}= useFetch('  http://localhost:8000/blogs/'+ id)
    const history = useHistory();

    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
   
    return (  
        <div className="blog-details">
        { isPending && <div>Loading...</div>}
        { error && <div>{error}</div>}
        {blog && (
            <article>
            <h2>{blog.title}</h2>
            <p style={{color:"grey",fontSize:"13px"}}>{new Date().toLocaleDateString()}</p>  
            <p style={{color:"green",paddingBottom:"5px"}}>Written by {blog.author}</p>
             <p>{blog.body}</p>
            <button onClick={handleClick}>Delete Blog</button>
            </article>
        )

        }
         </div>
    );
}
 
export default BlogDetails;