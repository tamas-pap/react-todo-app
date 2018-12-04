import { useState } from 'react';

const useTodoList = initialValue => {
    const [todos, setTodos] = useState(initialValue.todos);
    const [filter, setFilter] = useState(initialValue.filter);

    const addTodo = title => {
      setTodos([{ isCompleted: false, title }, ...todos]);
    };

    const toggleTodo = toggleIndex => {
      const newTodos = todos.map((todo, index) => {
        if (toggleIndex === index) {
          return {
            isCompleted: !todo.isCompleted,
            title: todo.title,
          };
        }
        return todo;
      });
      setTodos(newTodos);
    };

    const deleteTodo = deleteIndex => {
      const shouldDelete = window.confirm('Are you sure?');
      if (shouldDelete) {
        const newTodos = todos.filter((todo, index) => deleteIndex !== index);
        setTodos(newTodos);
      }
    };

    return {
      todos,
      filter,
      addTodo,
      toggleTodo,
      deleteTodo,
      setFilter,
    };
};

export default useTodoList;
