import { Space, Table } from "antd";
import moment from "moment";

import styles from "./UsersList.module.scss";
import DeleteUser from "../DeleteUser";
import EditUser from "../EditUser";
import ResetPassword from "../ResetPassword";

const { Column } = Table;

function UsersList({ listUsers }) {
  return (
    <Table dataSource={listUsers} pagination={{ pageSize: 9 }} rowKey="_id">
      <Column
        title="Avatar"
        render={(_, record) =>
          record.avatar && (
            <div className={styles.avatarWrapper}>
              <img src={record.avatar} className={styles.avatar} alt="Avatar" />
            </div>
          )
        }
        key="username"
      />
      <Column title="Username" dataIndex="username" key="username" />
      <Column title="Full Name" dataIndex="fullName" key="fullName" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column
        className={styles.gender}
        title="Gender"
        dataIndex="gender"
        key="gender"
      ></Column>

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
            <ResetPassword id={record._id} />
            <EditUser userData={record} />
            {record.username !== "admin" && <DeleteUser id={record._id} />}
          </Space>
        )}
      />
    </Table>
  );
}

export default UsersList;
