import uuid from "uuid/v4";
import useLocalStorageState from "./useLocalStorageState";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      const newTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(newTodos);
    },
    toggleTodo: todoId => {
      const updatedTodo = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodo);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodo = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodo);
    }
  };
};
