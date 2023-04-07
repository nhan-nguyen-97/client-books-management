import { Space, Table } from "antd";
import moment from "moment";

// import DeleteCustomer from "../DeleteCustomer";
// import EditCustomer from "../EditCustomer";
import styles from "./CustomersList.module.scss";

const { Column } = Table;

function CustomersList({ listCustomers }) {
  return (
    <Table
      dataSource={listCustomers}
      pagination={{
        pageSize: 9,
      }}
      rowKey="_id"
    >
      <Column title="Username" dataIndex="username" key="username" />

      <Column title="Name" dataIndex="fullName" key="fullName" />
      <Column title="Phone" dataIndex="phoneNumber" key="phoneNumber" />
      <Column
        className={styles.gender}
        title="Gender"
        dataIndex="gender"
        key="gender"
      ></Column>
      <Column title="Email" dataIndex="email" key="email" />

      <Column
        title="Created at"
        render={(_, record) =>
          record.createdAt &&
          moment(record.createdAt).format("DD/MM/YYYY HH:MM:SS")
        }
        key="createdAt"
      ></Column>
      <Column
        title="Updated at"
        render={(_, record) =>
          record.updatedAt !== record.createdAt &&
          moment(record.updatedAt).format("DD/MM/YYYY HH:MM:SS")
        }
        key="updatedAt"
      ></Column>
      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            {/* <EditBook bookData={record} listAuthors={listAuthors} /> */}
            {/* <DeleteBook id={record._id} /> */}
          </Space>
        )}
      />
    </Table>
  );
}

export default CustomersList;
