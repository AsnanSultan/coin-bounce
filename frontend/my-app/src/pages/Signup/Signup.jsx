import styles from './Signup.module.css';
import TextInput from "../../component/TextInput/TextInput";
import signupSchema from "../../schemas/signupSchema";
import { useFormik } from "formik";
import { setUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSignup = async () => {

    }

    const { values, touched, handleBlur, handleChange, errors } = useFormik({
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: signupSchema
    });

    return (<div className={styles.signupWrapper}>
        <div className={styles.signupHeader}>Create an account</div>
        <TextInput
            type="Text"
            values={values.name}
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="name"
            error={errors.name && touched.name ? 1 : undefined}
            errormessage={errors.name} />


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
            type="email"
            values={values.username}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="email"
            error={errors.email && touched.email ? 1 : undefined}
            errormessage={errors.email}


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
        <TextInput
            type="password"
            name="Confirm password"
            values={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Confirm password"
            error={errors.confirmPassword && touched.confirmPassword ? 1 : undefined}
            errormessage={errors.confirmPassword}
        />
        <button className={styles.signupButton} onClick={handleSignup}>Sign up</button>
        <span>
            have an account? <button className={styles.haveAccount} onClick={() => navigate('/login')}>Register</button>
        </span>{error != "" ? <p className={styles.errorMessage}>{error}</p> : null}

    </div>);
}
export default Signup;