import { Draggable } from "react-beautiful-dnd";
import styles from "./board.module.css";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/deleteModalSlice";

const Todo = ({ todo: { title, id }, index, sourceColumn }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (sourceColumn === "inProgress") {
      dispatch(
        openModal({
          itemId: id,
          sourceColumn
        })
      );
    }
  };

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className={styles.todo}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onClick={handleClick}
        >
          {title}
        </div>
      )}
    </Draggable>
  );
};

export default memo(Todo);
