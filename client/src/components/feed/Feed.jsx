import Share from '../share/Share'
import './feed.css'
import Post from '../post/Post'
import { useEffect, useState } from 'react';
import axios from "axios";
// import { Posts } from '../../DummyData'

export default function Feed({username}) {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        const fetchPosts = async () => {
            const res = username ? 
            await axios.get("/posts/profile/" + username) : 
            await axios.get("/posts/timeline/61a40e27635f160c80486677");
            console.log(res);
            setPosts(res.data);  
        };
        fetchPosts();
    },[username]) //Meaning running useEffect only once in the beginning
    
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {
                    posts.map((p) =>(
                        <Post key={p._id} post={p} />
                    ))
                }

                
            </div>
        </div>
    )
}
