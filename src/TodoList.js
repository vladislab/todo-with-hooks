import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <React.Fragment key={todo.id}>
            <Todo
              key={todo.id}
              task={todo.task}
              id={todo.id}
              completed={todo.completed}
              remove={removeTodo}
              toggleCheck={toggleTodo}
              edit={editTodo}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
