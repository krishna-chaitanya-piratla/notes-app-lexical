import styled from "styled-components";

export const StyledPlaceholder = styled.div<{ color?: string, fontSize?: string}>`
    position: absolute;
    top: 1rem;
    opacity: 50%;
    color: ${({color}) => color? color: 'inherit'};
    font-size: ${({fontSize}) => fontSize? fontSize: 'inherit'};
`;

export const StyledEditorWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledH1 = styled.h1`
    position: relative;
    color: gray;
    padding 1rem;

`;

export const StyledEditor = styled.div`
    position: relative;
    font-size: 1rem;
    line-height: 1.5;
    color: #374151;
    width: 90%;
    border: 1px dotted #bbbbbb;
    border-radius: 1rem;
    padding: 1rem;
    :focus-visible {
        outline: none;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }

`;
