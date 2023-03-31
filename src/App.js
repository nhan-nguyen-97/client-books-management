import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyles from "./components/GlobalStyles";
import Login from "./pages/login";
import Register from './pages/register'
import Books from "./pages/books";

function App() {
  return (
    <Fragment>
      <GlobalStyles>
        <Routes>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </GlobalStyles>
      <ToastContainer autoClose={2000} />
    </Fragment>
  );
}

export default App;
