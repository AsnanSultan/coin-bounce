import * as yup from "yup";

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const errormessage="user upercase, lower case and digits";
const signupSchema=yup.object({
    name:yup.string().max(30).required("Name is required"),
    username:yup.string().max(30).min(5).required("Username required"),
    email:yup.string().email("Enter valid email").required("Email is required"),
    password:yup.string().min(8).max(25).matches(passwordPattern,errormessage).required("Password is required"),
    confirmPassword:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

export default signupSchema;