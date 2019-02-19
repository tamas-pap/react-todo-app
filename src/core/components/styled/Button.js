import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
  color: ${props => props.theme.brandPrimary};
  border: 1px solid ${props => props.theme.brandPrimary};
  font-size: 16px;
  padding: 8px 20px;

  ${props =>
    props.fluid &&
    css`
      width: 100%;
    `}
`;

export default Button;
