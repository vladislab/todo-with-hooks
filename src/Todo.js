import React from "react";
import useToggleState from "./hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditTodoForm from "./EditTodoForm";

export default function Todo({
  task,
  completed,
  id,
  remove,
  toggleCheck,
  edit
}) {
  const [isEditting, toggleEdit] = useToggleState();
  return (
    <div>
      <ListItem style={{ height: "64px" }}>
        {isEditting ? (
          <EditTodoForm task={task} edit={edit} id={id} toggle={toggleEdit} />
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleCheck(id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={() => remove(id)}>
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
