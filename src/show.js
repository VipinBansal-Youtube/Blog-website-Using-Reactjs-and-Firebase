import React , {useState} from "react";
import { useParams} from 'react-router-dom';
import fb from "./firebase";
const DB =fb.firestore()
const Blogslist = DB.collection('blogs');

const BlogView = ()=> {
    const {id} = useParams();
    const[blogs, Setblogs] = useState([]);
    Blogslist.doc(id).get().then((snapshot) => {
        const data = snapshot.data()
        Setblogs(data);
    });
    return(
        <div>
            <p>Title : { blogs.Title}</p>
            <p>Body: {blogs.Body}</p>
        </div>
    );
};
export default BlogView;