import { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todata: "test",
      checkBox: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  modifyTodoData: (id, todo) => {},
  checkBoxSelected: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => {
  return useContext(TodoContext);
};
