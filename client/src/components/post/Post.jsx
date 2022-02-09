import './post.css'
import {MoreVert} from '@material-ui/icons';
// import {Users} from '../../DummyData';
import { useState, useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom";

export default function Post({post}) {
    
    // const user = Users.filter(u => u.id === post.userId)

    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [users, setUser] = useState({});
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    useEffect(()=> {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);  
        };
        fetchUser();
    },[post.userId]) //Meaning running useEffect only once in the beginning
    
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${users.username}`}>
                        <img src={users.profilePicture || PF+"person/noAvatar.png"} alt="" className="postProfileImg" />
                        <span className="postUsername">{users.username}</span>
                         <span className="postDate">{format(post.createdAt)}</span>
                        </Link>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF + post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft" >
                        <img src="/assets/like.png" onClick = {likeHandler} alt="" className="likeIcon" />
                        <img src="/assets/heart.png" onClick = {likeHandler} alt="" className="likeIcon" />
                        <span className="postLikeCounter">{like} People like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
