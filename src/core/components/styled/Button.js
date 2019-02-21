import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.brandPrimary};
  font-size: 16px;
  color: ${props => props.theme.brandPrimary};

  ${props =>
    props.fluid &&
    css`
      width: 100%;
    `}
`;

export default Button;
