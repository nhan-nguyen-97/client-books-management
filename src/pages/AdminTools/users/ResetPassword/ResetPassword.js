import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Input, Form } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";

import styles from "./ResetPassword.module.scss";
import { resetPasswordStart } from "../../../../redux/users/actions";

function ResetPassword({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const initialValues = {
    password: "",
  };
  const [data, setData] = useState(initialValues);

  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue(initialValues);
  };
  const handleSubmit = () => {
    if (data.password) {
      dispatch(resetPasswordStart({ id, data }));
      setIsModalOpen(false);
      form.resetFields();
      setData(initialValues);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const handleCancel = () => {
    setData(initialValues);
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <FontAwesomeIcon
        onClick={showModal}
        className={styles.edit}
        icon={faKeyboard}
      />
      <Modal
        forceRender
        title={`Reset Password`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        footer={null}
        destroyOnClose={true}
      >
        <Form
          form={form}
          initialValues={initialValues}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            value={data.password}
            name="password"
            required
            rules={[
              {
                required: true,
                whitespaceL: true,
                message: "Enter a Password",
              },
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
              onChange={(e) =>
                setData({ ...data, password: e.target.value.trim() })
              }
            ></Input>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                margin: "0 8px",
              }}
              onClick={handleSubmit}
              disabled={
                !form.isFieldsTouched(false) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
}

export default ResetPassword;
