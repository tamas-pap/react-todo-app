import http from '../../core/services/http';

export const createTodoList = title => {
  const payload = { title };
  return http.post('/todo-lists', payload).then(response => response.data);
};

export const loadTodoLists = () => http.get('/todo-lists').then(response => response.data);

export const deleteTodoList = id => http.delete(`/todo-lists/${id}`).then(response => response.data);
