import { Space, Table } from "antd";
import moment from "moment";

import styles from "./AuthorsList.module.scss";
import DeleteAuthor from "../DeleteAuthors";
import EditAuthor from "../EditAuthor";

const { Column } = Table;

function UsersList({ listAuthors }) {
  return (
    <Table dataSource={listAuthors} pagination={{ pageSize: 9 }} rowKey="_id">
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Date of Birth"
        render={(_, record) =>
          record.dateOfBirth && moment(record.dateOfBirth).format("DD/MM/YYYY")
        }
        key="dateOfBirth"
      ></Column>
      <Column
        title="Died"
        render={(_, record) =>
          record.died && moment(record.died).format("DD/MM/YYYY")
        }
        key="died"
      ></Column>
      <Column
        className={styles.gender}
        title="Gender"
        dataIndex="gender"
        key="gender"
      ></Column>
      <Column
        title="Place of origin"
        dataIndex="placeOrigin"
        key="placeOrigin"
      />
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
            <EditAuthor authorData={record} />
            <DeleteAuthor id={record._id} />
          </Space>
        )}
      />
    </Table>
  );
}

export default UsersList;
