import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBlogById,deleteBlog,postComment,getCommentsById } from '../../api/internal';

import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import styles from './BlogDetails.module.css';

function BlogDetails() {
const [blog, setBlog]=useState([]);
const [comments,setComments]=useState([]);
const [ownsBlog,setOwnsBlog]=useState(false);
const [newComment,setNewComment]=useState("");
const [reload,setReload]=useState(false);
const navigate=useNavigate();
const param=useParams();
const blogId=param.id;

const username=useSelector((state)=>state.user.usernamme);
const userId=useSelector((state)=>state.user._id);

const postCommentHandler=async()=>{
const data={
    author:userId,
    blog:blogId,
    content:newComment
}
const response=await postComment(data);
if(response.status===201){
setComments("");
setReload(!reload)
}

}

const deleteBlogHandler=async()=>{

}

return (
    <div className={styles.detailsWrapper}>
        <div className={styles.left}>
            <h1 className={styles.title}>
                {blog.title}
            </h1>
            <div className={styles.meta}>
            <p >
                @{blog.author + " on " + new Date(blog.createdAt).toDateString()} 
            </p>
            </div>
        </div>
        <div   className={styles.photo}>
            <img src={blog.photo} width={250} height={250} />
        </div>
<p className={styles.content}>
    {blog.content}
</p>
{
    ownsBlog &&(
        <div className={styles.control}>
            <button className={styles.edit}
            onClick={()=>{}}
            >
Edit
            </button>
            <button className={styles.delete}
            onClick={deleteBlogHandler}
            >
Delete
            </button>
            </div>
    )
}
        <div className={styles.right}>

            <div className={styles.commentsWrapper}>
                <CommentList/>
                <div className={styles.postComment}>
                    <input 
                    className={styles.input}
                    placeholder='comments goes here..'
                    value={newComment}
                    onChange={(e)=>setNewComment(e.target.value)}
                    type="text" />
                    <button className={styles.posthCommentButton}
                    onClick={postCommentHandler}
                    >
Post
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}