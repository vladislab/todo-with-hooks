import React, { useContext, memo } from "react";
import useToggleState from "./hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "./contexts/todos.context";

function Todo({ task, completed, id }) {
  const [isEditting, toggleEdit] = useToggleState(false);
  const dispatch = useContext(DispatchContext);
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
              onClick={() => dispatch({ type: "TOGGLE", id: id })}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                onClick={() => dispatch({ type: "REMOVE", id: id })}
              >
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
export default memo(Todo);
