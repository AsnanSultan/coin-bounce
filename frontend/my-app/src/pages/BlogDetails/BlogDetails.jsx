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
const navigate=useNavigate();
const param=useParams();
const blogId=param.id;

const username=useSelector((state)=>state.user.usernamme);
const userId=useSelector((state)=>state.user._id);



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

        <div className={styles.right}></div>
    </div>
);
}