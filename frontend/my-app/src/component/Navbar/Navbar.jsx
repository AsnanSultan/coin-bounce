import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"
import { useSelector } from "react-redux";
import {signout} from "../../api/internal";
import { useDispatch } from "react-redux";
import { resetUser } from "../../store/userSlice";

function Navbar() {
    const isAuthenticated = useSelector((state) => state.user.auth);

    const dispatch = useDispatch();
   const  handelSingout=async()=>{
        await signout();
        dispatch(resetUser());
    }
    return (

        <>
            <nav className={styles.navbar}>
                <NavLink
                    to="/"
                    className={`${styles.logo} ${styles.inActiveStyle}`}>CoinBounce</NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}

                >Home</NavLink>
                <NavLink to="/crypto"
                    className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}
                >Crypto</NavLink>
                <NavLink to="/blogs"
                    className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}

                >Blog</NavLink>
                <NavLink to="submit"
                    className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}

                >Submit a Blog</NavLink>

                {isAuthenticated ? <div>
                    <NavLink>
                        <button className={styles.signOutButton} onClick={handelSingout}>Sign out</button>
                    </NavLink>

                </div> : <div>
                    <NavLink to="login"
                        className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}

                    ><button className={styles.loginButton}>Log In</button></NavLink>
                    <NavLink to="sign-in"
                        className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}

                    ><button className={styles.signInButton}>Sign In</button></NavLink>
                </div>}
            </nav>
            <div className={styles.saparater}></div>
        </>

    );
}

export default Navbar;