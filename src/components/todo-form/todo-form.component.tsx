import {Container, FormInput, FormLabel} from "./todo-form.styles.ts";

const TodoForm = () => {
  return (
        <Container>
          <FormLabel htmlFor="input"></FormLabel>
          <FormInput id="input" type="text" placeholder="Create a new todo..."/>
        </Container>
  );
};

export default TodoForm;