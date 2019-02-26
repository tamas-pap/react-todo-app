import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { rotate } from '../../../core/styles';
import logo from '../../assets/img/logo.png';

export const Page = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 440px;
  padding: 35px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 16px ${transparentize(0.9, '#000')};
  transform: translate(-50%, -50%);

  ${props =>
    props.isLoading &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background-color: ${transparentize(0.1, '#fff')};
      }

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1000;
        display: inline-block;
        margin: -13px 0 0 -13px;
        width: 26px;
        height: 26px;
        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMjQyODMzIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2Utb3BhY2l0eT0iLjUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIvPjwvZz48L3N2Zz4=')
          no-repeat center;
        background-size: 26px;
        animation: ${rotate} 0.4s linear infinite;
      }
    `};
`;

export const PageTitle = styled.h1`
  margin-bottom: 22px;
  font-weight: ${props => props.theme.fontWeightMedium};
  font-size: 22px;
`;

export const PageLogo = styled.div`
  width: 40px;
  height: 32px;
  margin-bottom: 25px;
  background: url(${logo}) no-repeat;
  background-size: cover;
`;

export const PageSubtitle = styled.h2`
  margin-bottom: 22px;
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeightNormal};
  color: ${props => props.theme.gray};
`;
