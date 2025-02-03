import * as yup from "yup";

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const errormessage = "user upercase, lower case and digits";
const loginSchema = yup.object().shape({
    username: yup.string().min(5).max(30).required("username is required"),
    password: yup.string().min(8).max(25).matches(passwordPattern, errormessage).required("password is required"),
})

export default loginSchema;