import styles from "./Login.module.css";
import TextInput from "../../component/TextInput/TextInput";
import loginSchema from "../../schemas/LoginSchema";
import { useFormik } from "formik";

function Login() {

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
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="username"
                error={errors.username && touched.username ? 1 : undefined}
                errormessage={errors.username}


            />

            <TextInput
             type="password"
             values={values.password}
             onBlur={handleBlur}
             onChange={handleChange}
             placeholder="password"
             error={errors.password && touched.password ? 1 : undefined}
             errormessage={errors.password}
            />
            <button className={styles.loginButton}>Log in</button>
            <span>
                Don't have and account? <button className={styles.createAccount}>Register</button>
            </span>
        </div>
    );

};

export default Login;