import {Container, FilterButton} from "./filter.styles.tsx";

export const Filter = () => {
  return (
    <Container>
      <FilterButton className="active">All</FilterButton>
      <FilterButton>Active</FilterButton>
      <FilterButton>Completed</FilterButton>
    </Container>
  );
};
