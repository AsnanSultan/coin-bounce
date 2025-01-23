import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"
function Navbar() {
    const isAuthenticated = false;
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
                        <button className={styles.signOutButton}>Sign out</button>
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