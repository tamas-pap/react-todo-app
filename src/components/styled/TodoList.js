import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import checkSvg from '../../assets/img/check.svg';

export const TodoList = styled.div`
  width: 440px;
  padding: 36px 30px 26px 30px;
  background-color: #fff;
  box-shadow: 0 2px 16px ${transparentize(0.9, '#000')};
`;

export const TodoListTitle = styled.h1`
  margin-bottom: 22px;
  font-size: 22px;
  font-weight: 500;
`;

export const TodoListInput = styled.input`
  height: 38px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${transparentize(0.9, '#000')};
  box-shadow: inset 0 1px 3px 0 ${transparentize(0.9, '#000')};
  background-color: #fff;

  &:hover {
    border-color: #4a4ae5;
  }
`;

export const TodoListItems = styled.ul`
  margin: 30px 0 90px;
`;

export const TodoListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const TodoListCheckbox = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 15px;
  border: 1px solid ${transparentize(0.9, '#000')};
  border-radius: 4px;
  background-color: #fff;

  ${props =>
    props.isChecked &&
    css`
      background: #4a4ae5 url('${checkSvg}') no-repeat center;
    `};
`;
