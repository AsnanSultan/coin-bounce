
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home"
import styles from "./App.module.css";
function App() {
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
                  <div>Crypto page</div>
                </div>}
            />
            <Route
              path='/blogs'
              exact
              element={
                <div className={styles.main}>
                  <div>Blog page</div>
                </div>}
            />
             <Route
              path='/submit'
              exact
              element={
                <div className={styles.main}>
                  <div>Submit Blog page</div>
                </div>}
            />
             <Route
              path='/login'
              exact
              element={
                <div className={styles.main}>
                  <div>login page</div>
                </div>}
            />
             <Route
              path='/sign-in'
              exact
              element={
                <div className={styles.main}>
                  <div>Sign in page</div>
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
