import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainContent from "../../components/MainLayout/MainContent";
import DashboardCard from "./DashboardCard/DashboardCard";
import styles from "./Dashboard.module.scss";
// import {
//   loadUsersStart,
//   loadBooksStart,
//   loadAuthorsStart,
// } from "../../redux/actions";
import MainLayout from "../../components/MainLayout";
import { PrivateRoute } from "../../common/PrivateRoute";


function Dashboard() {
  const dispatch = useDispatch();

  // const { books } = useSelector((state) => state.books);
  // const { authors } = useSelector((state) => state.authors);
  // const { users } = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(loadUsersStart());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(loadBooksStart());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(loadAuthorsStart());
  // }, [dispatch]);

  return (
    <PrivateRoute>
      <MainLayout>
        <MainContent title="Dashboard">
          <div className={styles.wrapper}>
            <DashboardCard title="Books" value={10}></DashboardCard>
            <DashboardCard
              title="Authors"
              value={10}
            ></DashboardCard>
            <DashboardCard title="Users" value={10}></DashboardCard>
          </div>
        </MainContent>
      </MainLayout>
    </PrivateRoute>
  );
}

export default Dashboard;
