
import { Navigate } from "react-router-dom";
function Protected({ isAuth, childern }) {
    if (isAuth) {
        return childern;
    } else {
        return <Navigate to="/login" />
    }

}

export default Protected;