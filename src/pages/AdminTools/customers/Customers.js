import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PrivateRoute } from "../../../common/PrivateRoute";
import MainLayout from "../../../components/MainLayout";
import MainContent from "../../../components/MainLayout/MainContent";
import styles from "./Customers.module.scss";
import { loadCustomersStart } from "../../../redux/customers/actions";
import CustomersList from "./CustomerList";

function Customers() {
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.customers);
  useEffect(() => {
    dispatch(loadCustomersStart());
  }, [dispatch]);
  return (
    <PrivateRoute>
      <MainLayout>
        <MainContent title="Customers">
          <div className={styles.wrapper}>
            <div className={styles.groupBtn}>
              {/* <AddBook listAuthors={authors} /> */}
            </div>
            <div className={styles.customersList}>
              <CustomersList listCustomers={customers} />
            </div>
          </div>
        </MainContent>
      </MainLayout>
    </PrivateRoute>
  );
}

export default Customers;
