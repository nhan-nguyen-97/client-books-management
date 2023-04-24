import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Input, Form, Radio, InputNumber } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import styles from "./EditAuthor.module.scss";
import { updateCustomerStart } from "../../../../redux/customers/actions";

function EditCustomer({ customerData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const initialValues = {
    fullName: customerData.fullName,
    gender: customerData.gender,
    email: customerData.email,
    phoneNumber: customerData.phoneNumber,
  };
  const { _id: id } = customerData;
  const [data, setData] = useState(initialValues);

  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue(initialValues);
  };
  const handleSubmit = () => {
    if (data.fullName) {
      dispatch(updateCustomerStart({ id, data }));
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
        icon={faPenToSquare}
      />
      <Modal
        forceRender
        title={`Update Customer ${customerData.fullName}`}
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
            label="Name"
            name="fullName"
            required
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Please enter your name",
              },
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
              onChange={(e) =>
                setData({ ...data, fullName: e.target.value.trim() })
              }
            ></Input>
          </Form.Item>
          <Form.Item label="Phone" name="phoneNumber">
            <InputNumber
              style={{ width: "100%" }}
              addonBefore="+84"
              maxLength={11}
              step={1}
              value={data.phoneNumber}
              stringMode
              onChange={(value) => setData({ ...data, phoneNumber: value })}
            ></InputNumber>
          </Form.Item>
          <Form.Item
            label="Email"
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

export default EditCustomer;
