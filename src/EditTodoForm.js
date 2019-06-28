import React from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";

export default function EditTodoForm({ task, edit, id, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        edit(id, value);
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
