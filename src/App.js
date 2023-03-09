import Landingpage from './pages/landing.page';
import Login from './pages/auth/login';
import About from './pages/about.page';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Signup from './pages/auth/signup';
import Homepage from './pages/home.page';
// import Accountpage from './pages/account.page';
import Addnote from './pages/addnote.page';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  const {user} = useSelector((state) => ({...state}))
  
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        {user ? (
          <>
            <Route exact path="/homepg" element={<Homepage />} />
            <Route exact path="/addnote" element={<Addnote />} />
          </>
        ) : (
          <>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Landingpage />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
