import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { deleteCustomerStart } from "../../../../redux/customers/actions";
import styles from "./DeleteCustomer.module.scss";

function DeleteCustomer({ id }) {
  const dispatch = useDispatch();

  const handleDeleteCustomer = () => {
    if (window.confirm("Are you sure that you wanted to delete that user?")) {
      dispatch(deleteCustomerStart(id));
      console.log(id);
    }
  };
  return (
    <FontAwesomeIcon
      onClick={handleDeleteCustomer}
      className={styles.delete}
      icon={faTrashCan}
    />
  );
}

export default DeleteCustomer;
