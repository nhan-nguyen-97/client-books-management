import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import styles from "./DeleteAuthor.module.scss";
import { deleteAuthorStart } from "../../../redux/authors/actions";

function DeleteAuthor({ id }) {
  const dispatch = useDispatch();

  const handleDeleteAuthor = () => {
    if (window.confirm("Are you sure that you wanted to delete that author?")) {
      dispatch(deleteAuthorStart(id));
    }
  };
  return (
    <FontAwesomeIcon
      onClick={handleDeleteAuthor}
      className={styles.delete}
      icon={faTrashCan}
    />
  );
}

export default DeleteAuthor;
