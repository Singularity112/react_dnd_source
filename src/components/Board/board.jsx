import { useEffect } from "react";
import {
  fetchTodos,
  moveTodo,
  deleteAllTodosFromColumn
} from "../../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";
import { useCallback } from "react";

import styles from "./board.module.css";

const Board = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const newTodos = useSelector((state) => state.todos.new);
  const inProgressTodos = useSelector((state) => state.todos.inProgress);
  const doneTodos = useSelector((state) => state.todos.done);

  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;

    dispatch(
      moveTodo({
        itemId: result.draggableId,
        sourceColumn: result.source.droppableId,
        destinationColumn: result.destination.droppableId,
        destinationIdx: result.destination.index
      })
    );
  }, []);

  const deleteAllDone = () => {
    dispatch(
      deleteAllTodosFromColumn({
        sourceColumn: "done"
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.board}>
        <Column
          title="To do"
          todos={newTodos}
          isDropDisabled={true}
          sourceColumn="new"
        />
        <Column
          title="In progress"
          todos={inProgressTodos}
          sourceColumn="inProgress"
        />
        <Column title="Done" todos={doneTodos} sourceColumn="done">
          <button onClick={deleteAllDone}>Delete all</button>
        </Column>
      </div>
    </DragDropContext>
  );
};

export default Board;
