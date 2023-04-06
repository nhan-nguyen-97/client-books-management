import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import styles from "./DeleteBook.module.scss";
import {
  deleteBookStart,
} from "../../../redux/actions/bookActions";

function DeleteBook({ id }) {
  const dispatch = useDispatch();
  const handleDeleteBook = () => {
    if (window.confirm("Are you sure that you wanted to delete that book?")) {
      dispatch(deleteBookStart(id));
    }
  };

  return (
    <FontAwesomeIcon
      className={styles.delete}
      icon={faTrashCan}
      onClick={handleDeleteBook}
    />
  );
}

export default DeleteBook;
