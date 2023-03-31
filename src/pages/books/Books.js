import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Books.module.scss";
// import AddBook from "./AddBook";
import BooksList from "./BooksList";
import { loadBooksStart } from "../../redux/actions/bookActions";
// import { loadAuthorsStart } from "../../redux/actions/authorsAction";
import MainContent from "../../components/MainLayout/MainContent";
// import MainLayout from "../../components/MainLayout";
// import { PrivateRoute } from "../../common/PrivateRoute";

function Books() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  // const { authors } = useSelector((state) => state.authors);

  useEffect(() => {
    dispatch(loadBooksStart());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(loadAuthorsStart());
  // }, [dispatch]);
  return (
    // <PrivateRoute>
    // <MainLayout>
    <div>
      <MainContent title={"Books"}>
        <div className={styles.wrapper}>
          <div className={styles.groupBtn}>
            {/* <AddBook listAuthors={authors} /> */}
          </div>
          <div className={styles.booksList}>
            <BooksList listBooks={books} />
          </div>
        </div>
      </MainContent>
      <ToastContainer autoClose={2000} />
    </div>
    // </MainLayout>
    // </PrivateRoute>
  );
}

export default Books;