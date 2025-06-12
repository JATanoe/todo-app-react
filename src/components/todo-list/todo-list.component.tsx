import {Container} from "./todo-list.styles.ts";

import {Filter} from "../filter/filter.component.tsx";
import TodoItem from "../todo-item/todo-item.component.tsx";

const data = [
  {
    id: 1,
    title: "Complete online JavaScript course",
    completed: true,
    position: 1
  },
  {
    id: 2,
    title: "Jog around the park 3x",
    completed: false,
    position: 2
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false,
    position: 3
  },
  {
    id: 4,
    title: "Read for 1 hour",
    completed: false,
    position: 4
  },
  {
    id: 6,
    title: "Pick up groceries",
    completed: false,
    position: 6
  },
  {
    id: 7,
    title: "Complete Todo App on Frontend Mentor",
    completed: false,
    position: 7
  }
]

const TodoList = () => {
  return (
    <>
      <Container>
        {data.map((props) => (
          <TodoItem key={props.id} {...props} />
        ))}
        <li>
          <p>{data.length} items left</p>
          <Filter/>
          <button>Clear Completed</button>
        </li>
      </Container>
      <Filter/>
    </>
  );
};

export default TodoList;