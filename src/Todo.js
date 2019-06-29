import React, { useContext } from "react";
import useToggleState from "./hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditTodoForm from "./EditTodoForm";
import { TodosContext } from "./contexts/todos.context";

export default function Todo({ task, completed, id }) {
  const [isEditting, toggleEdit] = useToggleState();
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  return (
    <div>
      <ListItem style={{ height: "64px" }}>
        {isEditting ? (
          <EditTodoForm task={task} id={id} toggle={toggleEdit} />
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleTodo(id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggleEdit}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </div>
  );
}
