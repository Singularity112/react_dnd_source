import { Droppable } from "react-beautiful-dnd";
import Todo from "./todo";
import { memo } from "react";
import styles from "./board.module.css";

const Column = ({
  todos,
  title,
  children,
  isDropDisabled = false,
  sourceColumn
}) => {
  return (
    <div className={styles.column}>
      <div className={styles.title}>{title}</div>

      <Droppable droppableId={sourceColumn} isDropDisabled={isDropDisabled}>
        {(provided) => (
          <div
            className={styles.items}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todos.map((todo, index) => (
              <Todo
                todo={todo}
                index={index}
                key={todo.id}
                sourceColumn={sourceColumn}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="additional">{children}</div>
    </div>
  );
};

export default memo(Column);
