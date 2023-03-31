import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Login.module.scss";
// import { loadBooksError } from "../../redux/actions/bookActions";
// import { loadUsersStart } from "../../redux/actions/usersAction";

function Login() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [data, setData] = useState({
    username: "",
    password: "",
    position: "customer",
  });
  console.log(data);
  const initialValues = {
    username: "",
    password: "",
    position: "customer",
  };
  // const { users } = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(loadUsersStart());
  // }, [dispatch]);

  const handleLoginClick = () => {
    console.log("Thực hiện Login");
    // if (username && password) {
    //   const userPass = users.find((user) => {
    //     return username === user.username && password === user.password;
    //   });
    //   if (userPass) {
    //     localStorage.setItem("id_token", `${userPass.id}`);
    //     localStorage.setItem("user_profile", JSON.stringify(userPass));
    //     navigate("/");
    //   } else {
    //     toast.error("Username or Password do not match");
    //   }
    // }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Books Store Login</h2>
          <p>Please enter your account</p>
        </div>
        <div className={styles.loginForm}>
          <Form
            layout="horizontal"
            autoComplete="off"
            initialValues={initialValues}
          >
            <Form.Item
              name="username"
              required
              rules={[{ required: true, message: "Please enter an Username" }]}
            >
              <Input
                value={data.username}
                placeholder="Enter an Username"
                onChange={(e) => setData({ ...data, username: e.target.value })}
              ></Input>
            </Form.Item>
            <Form.Item
              value={data.password}
              name="password"
              required
              rules={[{ required: true, message: "Please enter a Password" }]}
            >
              <Input
                type="password"
                placeholder="Enter a Password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              ></Input>
            </Form.Item>
            <Form.Item label="Position" name="position">
              <Select
                style={{
                  width: "100%",
                }}
                onChange={(value) => setData({ ...data, position: value })}
                options={[
                  {
                    value: "customer",
                    label: "Customer",
                  },
                  {
                    value: "admin",
                    label: "Admin",
                  },
                ]}
              />
            </Form.Item>
            <Button
              htmlType="submit"
              style={{ width: "100%", color: "white" }}
              className={styles.btn}
              onClick={handleLoginClick}
            >
              Log in
            </Button>
          </Form>
          <div className={styles.footer}>
            <p>
              You don't have an account? <Link to="/register" className={styles.link}>Please Register</Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default Login;
