import http from '../../core/services/http';

export const createTodo = (todoListId, title) => {
  const payload = {
    title,
    isCompleted: false,
  };

  return http.post(`/todo-lists/${todoListId}/todos`, payload).then(response => response.data);
};

export const toggleTodo = (todoId, title, isCompleted) => {
  const payload = {
    title,
    isCompleted,
  };

  return http.put(`/todos/${todoId}`, payload).then(response => response.data);
};

export const deleteTodo = todoId => http.delete(`${todoId}/todos`, {}).then(response => response.data);

export const listTodos = todoListId => http.get(`/todo-lists/${todoListId}/todos`, {}).then(response => response.data);
