import { useNavigate } from "react-router-dom";
import {} from "@ant-design/icons";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faChartLine,
  faUserGear,
  faUserPen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.scss";

const items = [
  {
    label: "Dashboard",
    key: "/dashboard",
    icon: <FontAwesomeIcon icon={faChartLine} />,
  },
  {
    label: "Customers",
    key: "/dashboard/customers",
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
  {
    label: "Books",
    key: "/dashboard/books",
    icon: <FontAwesomeIcon icon={faBookOpen} />,
  },
  {
    label: "Authors",
    key: "/dashboard/authors",
    icon: <FontAwesomeIcon icon={faUserPen} />,
  },
  {
    label: "Admin",
    key: "/dashboard/users",
    icon: <FontAwesomeIcon icon={faUserGear} />,
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const onClick = ({ key }) => {
    navigate(key);
  };
  return (
    <Menu
      onClick={onClick}
      defaultOpenKeys="dashboard"
      mode="inline"
      items={items}
      className={styles.wrapper}
    />
  );
}

export default Sidebar;
