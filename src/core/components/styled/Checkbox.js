import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import checkSvg from '../../assets/img/check.svg';

const Checkbox = styled.div`
width: 18px;
height: 18px;
margin-right: 15px;
border: 1px solid ${(props) => props.theme.grayLight};
border-radius: 4px;
background-color: #fff;

${props =>
  props.isChecked &&
  css`
    background: ${(props) => props.theme.brandPrimary} url('${checkSvg}') no-repeat center;
  `};
`;
export default Checkbox;