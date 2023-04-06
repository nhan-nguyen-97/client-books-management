import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Input, Form, Radio, DatePicker } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import moment from "moment";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import styles from "./EditAuthor.module.scss";
import { updateAuthorStart } from "../../../redux/actions/authorActions";

dayjs.extend(customParseFormat);

function EditAuthor({ authorData }) {
  const dateFormat = "DD/MM/YYYY";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const initialValues = {
    name: authorData.name,
    dateOfBirth:
      authorData.dateOfBirth !== null
        ? dayjs(
            `${moment(authorData.dateOfBirth).format(dateFormat)}`,
            dateFormat
          )
        : "",
    died:
      authorData.died !== null
        ? dayjs(`${moment(authorData.died).format(dateFormat)}`, dateFormat)
        : "",
    gender: authorData.gender,
    placeOrigin: authorData.placeOrigin,
  };
  const [data, setData] = useState(initialValues);
  const id = authorData._id;
  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue(initialValues);
  };
  const handleSubmit = () => {
    if (data.name) {
      dispatch(updateAuthorStart({ id, data }));
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
        title={`Update Author ${authorData.name}`}
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
            name="name"
            required
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Enter an Username",
              },
            ]}
          >
            <Input
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item name="dateOfBirth" label="Birthday">
            <DatePicker
              format={dateFormat}
              value={data.dateOfBirth}
              onChange={(date, dateString) =>
                setData({ ...data, dateOfBirth: date })
              }
            />
          </Form.Item>
          <Form.Item name="died" label="Died">
            <DatePicker
              format={dateFormat}
              value={data.died}
              onChange={(date, dateString) => setData({ ...data, died: date })}
            />
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
          <Form.Item label="Origin" name="placeOrigin">
            <Input
              value={data.placeOrigin}
              onChange={(e) =>
                setData({ ...data, placeOrigin: e.target.value })
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

export default EditAuthor;
