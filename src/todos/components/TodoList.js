import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormInput, Checkbox } from '../../core/components/styled';
import { Page, PageTitle, PageLogo } from '../../common/components/styled';
import { TODO_FILTERS } from '../constants';
import { addTodo, toggleTodo, deleteTodo, updateFilter, filterTodos } from '../ducks';

import {
  TodoListItems,
  TodoListItem,
  TodoListDelete,
  TodoListFilter,
  TodoListFilterOptions,
  TodoListFilterOption,
  TodoListFilterLabel,
} from './styled';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  deleteTodo = deleteIndex => {
    const shouldDelete = window.confirm('Are you sure?');
    if (shouldDelete) {
      const { deleteTodo } = this.props;
      deleteTodo(deleteIndex);
    }
  };

  onInputKeyPress = event => {
    const { inputValue } = this.state;
    const { addTodo } = this.props;
    if (event.key === 'Enter' && !!inputValue.trim()) {
      addTodo({ title: inputValue });
      this.setState({ inputValue: '' });
    }
  };

  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;
    const { filter, filteredTodos, toggleTodo, updateFilter } = this.props;

    return (
      <Page>
        <PageLogo />
        <PageTitle>Todo list</PageTitle>
        <FormInput
          placeholder="Write your idea here..."
          onKeyPress={this.onInputKeyPress}
          onChange={this.onInputChange}
          value={inputValue}
        />
        <TodoListItems>
          {filteredTodos.map((todo, index) => (
            /* eslint-disable-next-line react/no-array-index-key */
            <TodoListItem key={index}>
              <Checkbox isChecked={todo.isCompleted} onClick={() => toggleTodo(index)} />
              {todo.title}
              <TodoListDelete onClick={() => this.deleteTodo(index)} />
            </TodoListItem>
          ))}
        </TodoListItems>
        <TodoListFilter>
          <TodoListFilterLabel>Show:</TodoListFilterLabel>
          <TodoListFilterOptions>
            <TodoListFilterOption
              isSelected={filter === TODO_FILTERS.all}
              onClick={() => updateFilter(TODO_FILTERS.all)}
            >
              {TODO_FILTERS.all}
            </TodoListFilterOption>
            <TodoListFilterOption
              isSelected={filter === TODO_FILTERS.completed}
              onClick={() => updateFilter(TODO_FILTERS.completed)}
            >
              {TODO_FILTERS.completed}
            </TodoListFilterOption>
            <TodoListFilterOption
              isSelected={filter === TODO_FILTERS.incompleted}
              onClick={() => updateFilter(TODO_FILTERS.incompleted)}
            >
              {TODO_FILTERS.incompleted}
            </TodoListFilterOption>
          </TodoListFilterOptions>
        </TodoListFilter>
      </Page>
    );
  }
}

TodoList.propTypes = {
  filter: PropTypes.string.isRequired,
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string.isRequired, isCompleted: PropTypes.bool.isRequired }).isRequired,
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.todos.todos.filter,
  filteredTodos: filterTodos(state.todos.todos),
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
