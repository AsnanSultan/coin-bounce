
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home"
import styles from "./App.module.css";
import Protected from "./component/Protected/protected";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Crypto from "./pages/Crypto/Crypto";
import { useSelector } from "react-redux";
import Blog from "./pages/Blog/Blog";
import SubmittBlogPage from "./pages/SubmittBlog/SubmittBlog";
function App() {
  const isAuth = useSelector((state) => state.user.auth);
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar />
          <Routes>
            <Route
              path='/'
              exact
              element={
                <div className={styles.main}>
                  <Home />
                </div>}
            />
            <Route
              path='/crypto'
              exact
              element={
                <div className={styles.main}>
                 <Crypto/>
                </div>}
            />
            <Route
              path='/blogs'
              exact
              element={
                //  <Protected isAuth={isAuth}>
                  <div className={styles.main}>
                    <Blog/>
                  </div>
                //  </Protected>
              }
            />
            <Route
              path='/submit'
              exact
              element={
                //<Protected isAuth={isAuth}>
                  <div className={styles.main}>
                  <SubmittBlogPage/>
                  </div>
                //</Protected>
              }
            />
            <Route
              path='/login'
              exact
              element={
                <div className={styles.main}>
                  <Login></Login>
                </div>}
            />
            <Route
              path='/sign-in'
              exact
              element={
                <div className={styles.main}>
                  <Signup></Signup>
                </div>}
            />
            <Route
              path='*'

              element={
                <div className={styles.main}>
                  <Error />
                </div>}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
