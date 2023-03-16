import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blogs from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <Router>
        <header>
          <ToastContainer />
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/add" element={<AddBlog />} />
            <Route path="/myBlogs" element={<UserBlogs />} />
            <Route path="/myBlogs/:id" element={<BlogDetail />} />
          </Routes>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
