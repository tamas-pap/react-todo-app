import styled, { css } from 'styled-components';

const Input = styled.input`
    border-radius: 0;
    border-bottom: 1px solid ${(props) => props.theme.grayLight};
    padding: 10px 0;
    
    &:focus {
        border-bottom-color: ${(props) => props.theme.brandPrimary};
    }
    `
export default Input;