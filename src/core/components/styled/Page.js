import styled from 'styled-components';
import transparentize from 'polished';

const Page = styled.div`
    background-color: #FFF;
    box-shadow: 0 2px 16px ${transparentize(0.9, '#000')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `
export default Page;