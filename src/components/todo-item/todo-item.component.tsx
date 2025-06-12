import {Container, TodoLabel, TodoInput, TodoButton} from "./todo-item.styles.tsx"

import CrossIcon from "../../assets/images/icon-cross.svg?react";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
  position: number;
}

const TodoItem = ({id, title, completed}: TodoProps) => {
  return (
    <Container>
      <TodoLabel htmlFor={`${id}`}>
        <TodoInput id={`${id}`} checked={completed} aria-checked={completed}/>
        <p className={`${completed && 'completed'}`}>{title}</p>
      </TodoLabel>
      <TodoButton>
        <CrossIcon/>
      </TodoButton>
    </Container>
  );
};

export default TodoItem;
