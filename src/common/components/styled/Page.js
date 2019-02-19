import styled from 'styled-components';
import { transparentize } from 'polished';
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
