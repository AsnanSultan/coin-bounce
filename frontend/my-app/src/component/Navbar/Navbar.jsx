import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"
function Navbar() {
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
                <NavLink to="login"
                    className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}

                ><button className={styles.loginButton}>Log In</button></NavLink>
                <NavLink to="sign-in"
                    className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}

                ><button className={styles.signInButton}>Sign In</button></NavLink>

            </nav>
            <div></div>
        </>

    );
}

export default Navbar;