import { Descriptions } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Profile.module.scss";
import MainContent from "../../components/MainLayout/MainContent";
import MainLayout from "../../components/MainLayout";
import { PrivateRoute } from "../../common/PrivateRoute";
import UpdateProfile from "./Update";
import { loadProfileStart } from "../../redux/auth/actions";
// import ChangePassword from "./ChangePassword";

function Profile() {
  const { userCurrent } = useSelector((state) => state.userCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    dispatch(loadProfileStart(token));
  }, [dispatch]);
  return (
    <PrivateRoute>
      <MainLayout>
        <MainContent title="Profile">
          <div className={styles.wrapper}>
            <div className={styles.userDetail}>
              <Descriptions title="User Info">
                <Descriptions.Item label="Username">
                  {userCurrent.username}
                </Descriptions.Item>
                <Descriptions.Item label="Full name">
                  {userCurrent.fullName}
                </Descriptions.Item>
                <Descriptions.Item label="Gender" className={styles.gender}>
                  {userCurrent.gender}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {userCurrent.email}
                </Descriptions.Item>
                <Descriptions.Item label="Avatar">
                  {userCurrent.avatar ? (
                    <img
                      className={styles.avatar}
                      src={userCurrent.avatar}
                      alt="Avatar"
                    />
                  ) : (
                    "No Avatar"
                  )}
                </Descriptions.Item>
              </Descriptions>
              <UpdateProfile userCurrent={userCurrent} />
              {/* <ChangePassword /> */}
            </div>
          </div>
        </MainContent>
      </MainLayout>
    </PrivateRoute>
  );
}

export default Profile;
