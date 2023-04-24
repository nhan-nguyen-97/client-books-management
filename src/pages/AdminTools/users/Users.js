import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "../../../components/MainLayout";
import { PrivateRoute } from "../../../common/PrivateRoute";
import MainContent from "../../../components/MainLayout/MainContent";
import styles from "./Users.module.scss";
import { loadUsersStart } from "../../../redux/users/actions";
import UsersList from "./UsersList";
import AddUser from "./AddUser";

function Users() {
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(loadUsersStart());
  }, [dispatch]);
  return (
    <PrivateRoute>
      <MainLayout>
        <MainContent title="Users">
          <div className={styles.wrapper}>
            <div className={styles.groupBtn}>
                <AddUser />
                </div>
            <div className={styles.usersList}>
              <UsersList listUsers={users} />
            </div>
          </div>
        </MainContent>
      </MainLayout>
    </PrivateRoute>
  );
}

export default Users;
