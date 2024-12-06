import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

export type LexicalEditorProps = {
    config: Parameters<typeof LexicalComposer>['0']['initialConfig'];
};

export function LexicalEditor(props: LexicalEditorProps) {
    return (
        <LexicalComposer initialConfig={props.config}>
            <RichTextPlugin
                contentEditable={<ContentEditable />}
                placeholder={<Placeholder />} 
                ErrorBoundary={LexicalErrorBoundary}
            />
        </LexicalComposer>
    );
}

const Placeholder = () => {
    return (
        <div style={{position: "absolute", top: '1.125rem', left: '1.125rem', opacity:'50%' }}>
            Start writing...
        </div>
    );
};