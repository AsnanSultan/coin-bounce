import { useState, useEffect } from "react";
import { getAllBlogs } from "../../api/internal";
import Loader from "../../component/Loader/Loader";
import styles from "./Blog.module.css";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        (async function getAllBlogApiCall() {
            const response = await getAllBlogs();

            if (response.status === 200) {
                setBlogs(response.data.blogs);
            }

        })();
        setBlogs([]);
    }, []);

    if (blogs.length <= 0) {
        return <Loader text="Blog page"></Loader>
    }
    return (
        <>
            <div className={styles.header}>Latest Blogs</div>


            <div className={styles.blogsWrapper}>
                {blogs.map((blog) => (
                    <div id={blog._id} key={blog._id} className={styles.blog}>
                        <h2>
                            {blog.title}
                        </h2>
                        <img src={blog.photo} />
                        <p>
                            {blog.content}
                        </p>
                    </div>
                ))
            }
            </div>
        </>
    );
}

export default Blog;