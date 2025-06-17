import {Container, TodoLabel, TodoTitle, TodoButton, TodoInput} from "./todo-item.styles.tsx"

import CrossIcon from "../../assets/images/icon-cross.svg?react";
import CheckIcon from "../../assets/images/icon-check.svg?react";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
  position: number;
}

const TodoItem = ({id, title, completed}: TodoProps) => {

  return (
    <Container>
      <TodoInput id={`${id}`}/>
      <TodoLabel htmlFor={`${id}`}>
        <CheckIcon/>
      </TodoLabel>
      <TodoTitle>{title}</TodoTitle>
      <TodoButton><CrossIcon/></TodoButton>
    </Container>
  );
};

export default TodoItem;
