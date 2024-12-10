import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { StyledPlaceholder, StyledEditor, StyledEditorWrapper, StyledH1 } from "../../styles/Editor";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { LinkNode } from "@lexical/link";
import { CodeNode } from "@lexical/code";
import { TRANSFORMERS } from "@lexical/markdown";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { LocalStoragePlugin } from "./plugins/LocalStorage";
import { ActionsPlugin } from "./plugins/Actions";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";

const EDITOR_NODES = [
  HeadingNode,
  QuoteNode,
  ListNode,
  ListItemNode,
  LinkNode,
  CodeNode
]

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
            <HistoryPlugin />
            <LocalStoragePlugin namespace={props.config.namespace} />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <ActionsPlugin />
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


const EDITOR_NAMESPACE = "my-notes"
export function Editor() {
  const content = localStorage.getItem(EDITOR_NAMESPACE);
    return (
      <StyledEditorWrapper>
        <div>
        <StyledH1>Just Take Notes</StyledH1>
        </div>
        <StyledEditor id="editor-wrapper">
            <LexicalEditor 
                config={{
                    namespace: EDITOR_NAMESPACE,
                    editorState: content,
                    nodes: EDITOR_NODES,
                    theme: lexicalEditorTheme,
                    onError: (error) => {
                        console.log(error);
                    }
                }}
            />
        </StyledEditor>
      </StyledEditorWrapper>
    );
}