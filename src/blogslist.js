import React , {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import fb from "./firebase";
const DB =fb.firestore()
const Blogslist = DB.collection('blogs');

const BlogslistView = () => {
    const[blogs, Setblogs] = useState([]);
    useEffect(() =>{
        const unsubscribe = Blogslist.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
            }));
            // Update state
            Setblogs(data);
          });
  
          // Detach listener
          return unsubscribe;
    }, []);

    const DeleteBlog = (id)=> {
        Blogslist.doc(id).delete().then(() => {
            alert("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    };
    return(
        <div>
            {blogs.map(blog=> (
                <div key={blog.id}>
                    <p>Title: {blog.Title}</p>
                    <p>Body: {blog.Body}</p>
                    <Link to={"/show/"+blog.id}>View</Link>
                    <Link to={"/EditBlog/"+blog.id}>Edit</Link>
                    <button 
                        onClick={()=> {DeleteBlog(blog.id)}} 
                    >delete</button>
                </div>
            ))}
        </div>
    );
};

export default BlogslistView;