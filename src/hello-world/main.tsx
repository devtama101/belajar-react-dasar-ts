import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />

      <AlertButton text="Click Me" message="You clicked me." />

      <MyButton text="Smash me" onSmash={() => alert("You smash me")} />

      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("You click toolbar");
        }}
      />
      <SearchForm />
    </Container>
  </StrictMode>
);
