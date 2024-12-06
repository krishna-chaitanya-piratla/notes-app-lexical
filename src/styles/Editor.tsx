import styled from "styled-components";

export const StyledPlaceholder = styled.div<{ color?: string, fontSize?: string}>`
    position: absolute;
    top: 1.125rem;
    left: 1.125rem;
    opacity: 50%;
    color: ${({color}) => color? color: 'inherit'};
    font-size: ${({fontSize}) => fontSize? fontSize: 'inherit'};
`;