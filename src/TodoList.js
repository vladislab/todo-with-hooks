import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import { TodosContext } from "./contexts/todos.context";

export default function TodoList() {
  const { todos } = useContext(TodosContext);
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <React.Fragment key={todo.id}>
            <Todo key={todo.id} {...todo} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
