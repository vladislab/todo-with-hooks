import React, { useContext } from "react";
import { TextField, Paper } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const { addTodo } = useContext(TodosContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="add new Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
