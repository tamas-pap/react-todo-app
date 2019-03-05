import React from 'react';
import { Route } from 'react-router-dom';
import { TodoListPage } from './pages';

const TodosRouter = () => (
  <>
    <Route exact path="/todo-list/:todoListId" component={TodoListPage} />
  </>
);

export default TodosRouter;
