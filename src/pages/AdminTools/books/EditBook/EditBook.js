import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  Input,
  Form,
  InputNumber,
  DatePicker,
  Select,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import dayjs from "dayjs";
import moment from "moment";
import customParseFormat from "dayjs/plugin/customParseFormat";

import styles from "./EditBook.module.scss";
import { updateBookStart } from "../../../../redux/books/actions";
dayjs.extend(customParseFormat);

function EditBook({ bookData, listAuthors }) {
  const dateFormat = "YYYY";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const initialValues = {
    name: bookData.name,
    price: bookData.price,
    author: bookData.author,
    published:
      bookData.published !== null
        ? dayjs(`${moment(bookData.published).format(dateFormat)}`, dateFormat)
        : "",
  };
  const [data, setData] = useState(initialValues);
  const id = bookData._id;

  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue(initialValues);
  };

  // Get data Authors for Add new Book
  const options = [];
  listAuthors.map((author) => {
    options.push({
      value: author.name,
      label: author.name,
    });
    return options;
  });

  const handleSubmit = () => {
    if (data.name) {
      console.log("Update successfully");
      dispatch(updateBookStart({ id, data }));
      setIsModalOpen(false);
      form.resetFields();
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setData(initialValues);
  };

  return (
    <Fragment>
      <FontAwesomeIcon
        className={styles.edit}
        icon={faPenToSquare}
        onClick={showModal}
      />
      <Modal
        forceRender
        title={`Update ${bookData.name}`}
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
                message: "Enter an Book Name",
              },
            ]}
          >
            <Input
              value={data.name}
              onChange={(e) =>
                setData({ ...data, name: e.target.value.trim() })
              }
            />
          </Form.Item>
          <Form.Item label="Price" name={"price"}>
            <InputNumber
              value={data.price}
              min={0}
              max={10000000}
              step={5000}
              style={{ width: 275 }}
              onChange={(value) => setData({ ...data, price: value })}
            />
          </Form.Item>
          <Form.Item label="Author" name="author">
            <Select
              showSearch
              options={options}
              onChange={(value) => setData({ ...data, author: value })}
            ></Select>
          </Form.Item>
          <Form.Item label="Published" name="published">
            <DatePicker
              format="YYYY"
              value={data.published}
              onChange={(date, dateString) =>
                setData({ ...data, published: date })
              }
              picker="year"
            />
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

export default EditBook;
