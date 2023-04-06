import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Form,
} from "antd";
import { createBookStart } from "../../../redux/actions/bookActions";

function AddBook({ listAuthors }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const initialValues = {
    name: "",
    price: 0,
    author: "",
    published: "",
  };
  const [data, setData] = useState(initialValues);

  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue(initialValues);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setData(initialValues);
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
      console.log("Created new Book", data);
      dispatch(createBookStart(data));
      setIsModalOpen(false);
      form.resetFields();
      setData(initialValues);
    }
  };

  return (
    <Fragment>
      <Button type="primary" onClick={showModal}>
        Add new
      </Button>
      <Modal
        forceRender
        title="Add new"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        footer={null}
        destroyOnClose={true}
      >
        <Form
          form={form}
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
          initialValues={initialValues}
        >
          <Form.Item
            label="Name"
            name="name"
            required
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Enter a Book Name",
              },
            ]}
          >
            <Input
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value.trim() });
              }}
            ></Input>
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
          <Form.Item label="Author" name={"author"}>
            <Select
              showSearch
              options={options}
              onChange={(value) => setData({ ...data, author: value })}
            ></Select>
          </Form.Item>
          <Form.Item label="Published" name={"published"}>
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

export default AddBook;
