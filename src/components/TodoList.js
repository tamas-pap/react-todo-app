import React from 'react';
import memoize from 'memoize-one';
import {
  TodoList as TodoListContainer,
  TodoListTitle,
  TodoListItems,
  TodoListItem,
  TodoListInput,
  TodoListCheckbox,
  TodoListDelete,
  TodoListFilter,
  TodoListFilterOptions,
  TodoListFilterOption,
  TodoListFilterLabel,
} from './styled';
import { useTodoList, useInput } from '../states';

const FILTERS = {
  all: 'All',
  completed: 'Completed',
  incompleted: 'Incompleted',
};

const filterTodos = memoize((todos, filter) => {
  switch (filter) {
    case FILTERS.all:
      return todos;

    case FILTERS.completed:
      return todos.filter(todo => todo.isCompleted);

    case FILTERS.incompleted:
      return todos.filter(todo => !todo.isCompleted);

    default:
      return todos;
  }
});

const TodoList = () => {
  const { todos, filter, addTodo, toggleTodo, deleteTodo, setFilter } = useTodoList({ todos: [], filter: FILTERS.all });

  const { value, setValue } = useInput('');

  const onInputKeyPress = event => {
    if (event.key === 'Enter' && !!value.trim()) {
      addTodo(value);
      setValue('');
    }
  };

  const onInputChange = event => {
    setValue(event.target.value);
  };

  const filteredTodos = filterTodos(todos, filter);

  return (
    <TodoListContainer>
      <TodoListTitle>Todo list</TodoListTitle>
      <TodoListInput
        placeholder="Write your idea here..."
        onKeyPress={onInputKeyPress}
        onChange={onInputChange}
        value={value}
      />
      <TodoListItems>
        {filteredTodos.map((todo, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TodoListItem key={index}>
            <TodoListCheckbox isChecked={todo.isCompleted} onClick={() => toggleTodo(index)} />
            {todo.title}
            <TodoListDelete onClick={() => deleteTodo(index)} />
          </TodoListItem>
        ))}
      </TodoListItems>
      <TodoListFilter>
        <TodoListFilterLabel>Show:</TodoListFilterLabel>
        <TodoListFilterOptions>
          <TodoListFilterOption isSelected={filter === FILTERS.all} onClick={() => setFilter(FILTERS.all)}>
            {FILTERS.all}
          </TodoListFilterOption>
          <TodoListFilterOption isSelected={filter === FILTERS.completed} onClick={() => setFilter(FILTERS.completed)}>
            {FILTERS.completed}
          </TodoListFilterOption>
          <TodoListFilterOption
            isSelected={filter === FILTERS.incompleted}
            onClick={() => setFilter(FILTERS.incompleted)}
          >
            {FILTERS.incompleted}
          </TodoListFilterOption>
        </TodoListFilterOptions>
      </TodoListFilter>
    </TodoListContainer>
  );
};

export default TodoList;
