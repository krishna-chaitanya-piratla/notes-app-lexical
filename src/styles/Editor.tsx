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




export const StyledActionButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  background-color: #f1f5f9; /* Default slate-100 */
  color: #1f2937; /* Default slate-900 */

  &:disabled {
    background-color: #f8fafc; /* Slate-50 */
    color: #94a3b8; /* Slate-400 */
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: #e2e8f0; /* Slate-200 */
  }

  &:focus-visible {
    outline: 2px solid #64748b; /* Slate-500 */
    outline-offset: 2px;
  }
`;