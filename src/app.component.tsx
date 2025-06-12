// import * as React from "react";
// import useLocalStorage from "use-local-storage"

import {Container, Footer, HeroSection, Main, TodoSection} from "./app.styles.tsx";

import imageMobileLight from "./assets/images/bg-mobile-light.jpg";
import imageMobileDark from "./assets/images/bg-mobile-dark.jpg";
import imageDesktopLight from "./assets/images/bg-desktop-light.jpg";
import imageDesktopDark from "./assets/images/bg-desktop-dark.jpg";
import Header from "./components/header/header.component.tsx";
import TodoForm from "./components/todo-form/todo-form.component.tsx";
import TodoList from "./components/todo-list/todo-list.component.tsx";

const image = {
  light: {
    mobile: imageMobileLight,
    desktop: imageMobileDark
  },
  dark: {
    mobile: imageDesktopLight,
    desktop: imageDesktopDark
  }
}

function App() {
  return (
    <Container>
      <HeroSection $image={image}/>
      <TodoSection>
        <Header/>
        <Main>
          <TodoForm/>
          <TodoList/>
        </Main>
        <Footer>
          <p>Drag and drop to reorder list</p>
        </Footer>
      </TodoSection>
    </Container>
  )
}

export default App

