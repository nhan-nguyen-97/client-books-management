import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { deleteUserStart } from "../../../../redux/users/actions";
import styles from "./DeleteUser.module.scss";

function DeleteUser({ id }) {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    if (window.confirm("Are you sure that you wanted to delete that user?")) {
      dispatch(deleteUserStart(id));
    }
  };
  return (
    <FontAwesomeIcon
      onClick={handleDeleteUser}
      className={styles.delete}
      icon={faTrashCan}
    />
  );
}

export default DeleteUser;
