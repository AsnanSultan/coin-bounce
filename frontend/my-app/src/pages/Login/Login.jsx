import styles from "./Login.module.css";
import TextInput from "../../component/TextInput/TextInput";
import loginSchema from "../../schemas/LoginSchema";
import { useFormik } from "formik";
import { login } from "../../api/internal";
import { setUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = async () => {
        const data = {
            email: values.username,
            password: values.password
        };
        const response = await login(data);
        if (response.status === 200) {
            const user = {
                _id: response.data.user._id,
                email: response.data.user.email,
                username: response.data.user.username,
                auth: response.data.auth
            }
            dispatch(setUser(user));
            navigate("/");
        }
        else if (response.code === "ERR_BAD_REQUEST") {
            // alert("Invalid username or password");
            setError(response.response.data.message);
        }

    };

    const { values, touched, handleBlur, handleChange, errors } = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: loginSchema
    })

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginHeader}>Login to your account</div>

            <TextInput
                type="Text"
                values={values.username}
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="username"
                error={errors.username && touched.username ? 1 : undefined}
                errormessage={errors.username}


            />

            <TextInput
                type="password"
                name="password"
                values={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="password"
                error={errors.password && touched.password ? 1 : undefined}
                errormessage={errors.password}
            />
            <button className={styles.loginButton} onClick={handleLogin}
                disabled={!values.username || !values.password || error.username || error.password}
            >Log in</button>
            <span>
                Don't have and account? <button className={styles.createAccount} onClick={() => navigate('/sign-in')}>Register</button>
            </span>{error !== "" ? <p className={styles.errorMessage}>{error}</p> : null}

        </div>
    );

};

export default Login;