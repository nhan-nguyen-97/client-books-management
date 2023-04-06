// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

import { PrivateRoute } from "../../common/PrivateRoute";
import MainLayout from "../../components/MainLayout";
import MainContent from "../../components/MainLayout/MainContent";
import styles from "./Customers.module.scss";

function Customers() {
  // const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(loadBooksStart());
//   }, [dispatch]);
  return (
    <PrivateRoute>
      <MainLayout>
        <MainContent title="Customers">
          <div className={styles.wrapper}>
            <div className={styles.groupBtn}>
              {/* <AddBook listAuthors={authors} /> */}
            </div>
            <div className={styles.booksList}>
              {/* <BooksList listBooks={books} listAuthors={authors} /> */}
            </div>
          </div>
        </MainContent>
      </MainLayout>
    </PrivateRoute>
  );
}

export default Customers;
