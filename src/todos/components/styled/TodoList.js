import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import deleteSvg from '../../../core/assets/img/delete.svg';

export const TodoListItems = styled.ul`
  margin: 30px 0 90px;
`;

export const TodoListDelete = styled.button`
    display: none;
    width: 11px;
    height: 11px;
    background: url('${deleteSvg}') no-repeat center;
    border: none;
    margin-left: auto;
`;

export const TodoListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;

  &:hover {
    ${TodoListDelete} {
      display: block;
    }
  }
`;

export const TodoListFilterLabel = styled.span`
  color: ${transparentize(0.6, '#000')};
  margin-right: 20px;
`;

export const TodoListFilterOptions = styled.div``;

export const TodoListFilterOption = styled.button`
  color: #4a4ae5;
  text-decoration: underline;
  border: none;
  background: transparent;

  ${props =>
    props.isSelected &&
    css`
      color: #000;
      text-decoration: none;
    `};
`;

export const TodoListFilter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;
