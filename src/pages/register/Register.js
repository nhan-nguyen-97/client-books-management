import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Select, InputNumber, Radio } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Register.module.scss";

function Register() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const initialValues = {
    username: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    gender: "male",
    position: "customer",
  };
  const [data, setData] = useState(initialValues);
  console.log(data);

  const handleRegisterClick = () => {
    console.log("Thực hiện Register");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Books Store Register</h2>
          <p>Please enter your account information</p>
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
              rules={[
                { required: true, message: "Please enter an Username" },
                {
                  min: 6,
                  max: 50,
                  message: "Username must be between 6 and 50 characters",
                },
              ]}
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
              rules={[
                { required: true, message: "Please enter a Password" },
                {
                  min: 6,
                  max: 100,
                  message: "Password must be between 6 and 100 characters",
                },
              ]}
            >
              <Input
                type="password"
                placeholder="Enter a Password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              ></Input>
            </Form.Item>
            <Form.Item
              name="fullName"
              required
              rules={[
                { required: true, message: "Please enter your name" },
                {
                  min: 1,
                  max: 100,
                  message: "Your name must be less than 100 characters",
                },
              ]}
            >
              <Input
                value={data.fullName}
                placeholder="Enter your Name"
                onChange={(e) => setData({ ...data, fullName: e.target.value })}
              ></Input>
            </Form.Item>
            <Form.Item name="phoneNumber">
              <InputNumber
                style={{ width: "100%" }}
                addonBefore="+84"
                maxLength={11}
                step={1}
                value={data.phoneNumber}
                stringMode
                placeholder="Enter your Phone Number"
                onChange={(value) => setData({ ...data, phoneNumber: value })}
              ></InputNumber>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ type: "email", message: "Email is not valid" }]}
            >
              <Input
                value={data.email}
                placeholder="Enter your Email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              ></Input>
            </Form.Item>
            <Form.Item label="Gender" name="gender">
            <Radio.Group
              value={data.gender}
              onChange={(e) => {
                setData({ ...data, gender: e.target.value });
              }}
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
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
                  // {
                  //   value: "admin",
                  //   label: "Admin",
                  // },
                ]}
              />
            </Form.Item>
            <Button
              htmlType="submit"
              style={{ width: "100%", color: "white" }}
              className={styles.btn}
              onClick={handleRegisterClick}
            >
              Register
            </Button>
          </Form>
          <div className={styles.footer}>
            <p>
              Do you already have an account?{" "}
              <Link to="/login" className={styles.link}>
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default Register;
