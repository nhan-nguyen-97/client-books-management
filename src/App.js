import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyles from "./components/GlobalStyles";
import Login from "./pages/login";
import Register from "./pages/register";
import Books from "./pages/AdminTools/books";
// import HomeClient from "./pages/homeClient";
import Customers from "./pages/AdminTools/customers";
import Dashboard from "./pages/AdminTools/dashboard";
import Authors from "./pages/AdminTools/authors";
import Profile from "./pages/AdminTools/profile";
import Users from "./pages/AdminTools/users";

function App() {
  return (
    <Fragment>
      <GlobalStyles>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard/books" element={<Books />}></Route>
          <Route path="/dashboard/customers" element={<Customers />}></Route>
          <Route path="/dashboard/authors" element={<Authors />}></Route>
          <Route path="/dashboard/users" element={<Users />}></Route>
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route path="/" element={<HomeClient />}></Route> */}
        </Routes>
      </GlobalStyles>
      <ToastContainer autoClose={2000} />
    </Fragment>
  );
}

export default App;
