import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";

import styles from "./Login.module.scss";
import { loginUserStart } from "../../redux/auth/actions";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
    position: "admin",
  };

  const [data, setData] = useState(initialValues);
  const [position, setPosition] = useState("admin");

  const handleLoginClick = () => {
    if (data.username && data.password) {
      if (position === "admin") {
        dispatch(
          loginUserStart(data, () => {
            navigate("/dashboard");
          })
        );
      }
    }
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
                onChange={(value) => setPosition(value)}
                options={[
                  // {
                  //   value: "customer",
                  //   label: "Customer",
                  // },
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
              You don't have an account?{" "}
              <Link to="/register" className={styles.link}>
                Please Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
