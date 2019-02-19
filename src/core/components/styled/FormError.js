import styled from 'styled-components';

const FormError = styled.span`
  display: block;
  font-size: 12px;
  color: ${props => props.theme.brandAlert};
`;

export default FormError;
