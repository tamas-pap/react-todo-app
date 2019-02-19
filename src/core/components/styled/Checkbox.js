import styled, { css } from 'styled-components';
import checkSvg from '../../assets/img/check.svg';

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 6px;
  background-color: #fff;

  ${props =>
    props.isChecked &&
    css`
    background: ${props => props.theme.brandPrimary} url('${checkSvg}') no-repeat center;
    border-color: ${props => props.theme.brandPrimary};
  `};
`;
export default Checkbox;
