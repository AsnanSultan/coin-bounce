import { useState } from "react";
import {submittBlog} from "../../api/internal";
import styles from "./SubmittBlog.module.css";
import { useSelector } from "react-redux";
import TextInput from "../../component/TextInput/TextInput";
import { useNavigate } from "react-router-dom";

function SubmittBlogPage() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [content, setContent] = useState("");
    const author = useSelector((state) => state.user._id);

    const getPhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPhoto(reader.result);
        }
    }
    const submitButtonHandler = async () => {
        const data = { title, photo, content, author };
        const response = await submittBlog(data);
        if (response.status == 201) {
            navigate("/");
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                Create a Blog
            </div>
            <TextInput
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: '60%' }}
            ></TextInput>
            <textarea
                className={styles.content}
                placeholder="Your content goes here.."
                maxLength={400}
                value={content}
                onChange={(e) => setContent(e.target.value)}

            ></textarea>
            <div className={styles.photoPrompt}>
                <p>Choose a Photo</p>
                <input
                    type="file"
                    name="photo"
                    id="photo"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={getPhoto}
                ></input>
            </div>
            <button
                className={styles.submitButton}
                onClick={submitButtonHandler}
            >
                Submit
            </button>
        </div>
    )
}

export default SubmittBlogPage;