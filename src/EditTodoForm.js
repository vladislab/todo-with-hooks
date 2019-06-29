import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";
import { TodosContext } from "./contexts/todos.context";

export default function EditTodoForm({ task, id, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  const { editTodo } = useContext(TodosContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        toggle(id);
        reset();
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
