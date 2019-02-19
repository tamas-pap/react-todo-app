import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid ${props => props.theme.grayLight};

  &:focus {
    border-bottom-color: ${props => props.theme.brandPrimary};
  }
`;

export default Input;
