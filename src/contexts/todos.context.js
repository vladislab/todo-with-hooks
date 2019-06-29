import React, { createContext } from "react";
import useTodoStates from "../hooks/useTodoStates";
const defaultTodos = [
  {
    id: 1,
    task: "clean fishtank",
    completed: false
  },
  {
    id: 2,
    task: "clean car",
    completed: true
  },
  {
    id: 3,
    task: "clean room",
    completed: false
  }
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todoStuff = useTodoStates(defaultTodos);

  return (
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
