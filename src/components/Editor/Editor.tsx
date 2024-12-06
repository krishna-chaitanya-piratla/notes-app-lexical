import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { StyledPlaceholder } from "../../styles/Editor";

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