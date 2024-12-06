import styled from "styled-components";

export const StyledPlaceholder = styled.div<{ color?: string, fontSize?: string}>`
    position: absolute;
    top: 0rem;
    opacity: 50%;
    color: ${({color}) => color? color: 'inherit'};
    font-size: ${({fontSize}) => fontSize? fontSize: 'inherit'};
`;

export const StyledEditorWrapper = styled.div`
    position: relative;
    font-size: 1rem;
    line-height: 1.5;
    color: #374151;
    width: 80%;
    border: 1px solid black;

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }

`;
