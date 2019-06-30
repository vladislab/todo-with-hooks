import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";

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
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
