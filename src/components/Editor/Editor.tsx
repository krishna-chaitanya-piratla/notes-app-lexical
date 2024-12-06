import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { StyledPlaceholder, StyledEditorWrapper } from "../../styles/Editor";

export type LexicalEditorProps = {
    config: Parameters<typeof LexicalComposer>['0']['initialConfig'];
};

export function LexicalEditor(props: LexicalEditorProps) {
    return (
        <LexicalComposer initialConfig={props.config}>
            <RichTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<StyledPlaceholder>Start writing...</StyledPlaceholder>} 
                ErrorBoundary={LexicalErrorBoundary}
            />
        </LexicalComposer>
    );
}

const lexicalEditorTheme = {
    root: `
      padding: 1rem;
      border: 2px solid #64748b; /* Slate-500 */
      border-radius: 0.5rem;
      height: 100%;
      min-height: 200px;
      outline: none;
      &:focus-visible {
        border-color: black;
      }
    `,
    link: `
      cursor: pointer;
    `,
    text: {
      bold: `
        font-weight: 600; /* Semi-bold */
      `,
      underline: `
        text-decoration: underline;
      `,
      italic: `
        font-style: italic;
      `,
      strikethrough: `
        text-decoration: line-through;
      `,
      underlineStrikethrough: `
        text-decoration: underline line-through;
      `,
    },
  };

export function Editor() {
    return (
        <StyledEditorWrapper id="editor-wrapper">
            <LexicalEditor 
                config={{
                    namespace: 'lexical-editor',
                    theme: lexicalEditorTheme,
                    onError: (error) => {
                        console.log(error);
                    }
                }}
            />
        </StyledEditorWrapper>
    );
}