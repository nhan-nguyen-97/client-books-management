import { Space, Table } from "antd";
import moment from "moment";

import DeleteBook from "../DeleteBook";
import EditBook from "../EditBook/EditBook";

const { Column } = Table;

function BooksList({ listBooks, listAuthors }) {
  return (
    <Table
      dataSource={listBooks}
      pagination={{
        pageSize: 9,
      }}
      rowKey="_id"
    >
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Author" dataIndex="author" key="author" />
      <Column
        title="Published"
        render={(_, record) =>
          record.published && moment(record.published).format("YYYY")
        }
        key="published"
      />
      <Column title="Price" dataIndex="price" key="price" />
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
            <EditBook bookData={record} listAuthors={listAuthors} />
            <DeleteBook id={record._id} />
          </Space>
        )}
      />
    </Table>
  );
}

export default BooksList;
