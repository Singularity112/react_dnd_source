import { memo } from "react";
import styles from "./modals.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/deleteModalSlice";
import { deteleTodoFromColumn } from "../../store/todoSlice";

const DeleteModal = () => {
  const active = useSelector((state) => state.deleteModal.active);
  const itemId = useSelector((state) => state.deleteModal.itemId);
  const sourceColumn = useSelector((state) => state.deleteModal.sourceColumn);

  const dispatch = useDispatch();

  const onConfirmClick = () => {
    dispatch(
      deteleTodoFromColumn({
        itemId,
        sourceColumn
      })
    );
    dispatch(closeModal());
  };
  return (
    active && (
      <div className={styles.modal}>
        <div className={styles.body}>
          <div className={styles.title}>Are you sure ?</div>
          <div className={styles.buttons}>
            <button onClick={onConfirmClick}>Yes</button>
            <button onClick={() => dispatch(closeModal())}>No</button>
          </div>
        </div>
      </div>
    )
  );
};

export default memo(DeleteModal);
