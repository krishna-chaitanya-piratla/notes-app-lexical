import { useEffect, useMemo, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import {
    $getRoot,
    $isParagraphNode,
    CLEAR_EDITOR_COMMAND,
    REDO_COMMAND,
    UNDO_COMMAND,
  } from "lexical";

import { ComponentProps } from "react";
import { createContext, ReactNode, useContext } from "react";
import {
    createEmptyHistoryState,
    HistoryState,
  } from "@lexical/react/LexicalHistoryPlugin";
import { StyledActionButton } from "../../../styles/Editor";

type EditorHistoryStateContext = {
    historyState?: HistoryState;
  };

const Context = createContext<EditorHistoryStateContext>({});

export function EditorHistoryStateContext({
children,
}: {
children: ReactNode;
}) {
const h = useMemo(() => ({ historyState: createEmptyHistoryState() }), []);
return <Context.Provider value={h}>{children}</Context.Provider>;
}

export function useEditorHistoryState(): EditorHistoryStateContext {
return useContext(Context);
}

const ActionIcons = {
    Clear: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{
            width: "1.25rem",
            height: "1.25rem"
        }}
      >
        <title>Clear</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
        />
      </svg>
    ),
    Undo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{
            width: "1.25rem",
            height: "1.25rem"
        }}
      >
        <title>Undo</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
      </svg>
    ),
    Redo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{
            width: "1.25rem",
            height: "1.25rem"
        }}
      >
        <title>Redo</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
        />
      </svg>
    ),
  };

type ButtonProps = {
    children?: JSX.Element;
} & ComponentProps<"button">;

export function ActionButton({ children, ...props}: ButtonProps) {
    return (
        <StyledActionButton {...props}>
            { children }
        </StyledActionButton>
    );
}

export function ActionsPlugin() {
    const [editor] = useLexicalComposerContext();
    const { historyState } = useEditorHistoryState();
  
    const [isEditorEmpty, setIsEditorEmpty] = useState(true);
  
    const { undoStack, redoStack } = historyState ?? {};
    const [hasUndo, setHasUndo] = useState(undoStack?.length !== 0);
    const [hasRedo, setHasRedo] = useState(redoStack?.length !== 0);
  
    const MandatoryPlugins = useMemo(() => {
      return <ClearEditorPlugin />;
    }, []);
  
    useEffect(
      function checkEditorEmptyState() {
        return editor.registerUpdateListener(({ editorState }) => {
          editorState.read(() => {
            const root = $getRoot();
            const children = root.getChildren();
  
            if (children.length > 1) {
              setIsEditorEmpty(false);
              return;
            }
  
            if ($isParagraphNode(children[0])) {
              setIsEditorEmpty(children[0].getChildren().length === 0);
            } else {
              setIsEditorEmpty(false);
            }
          });
        });
      },
      [editor]
    );
  
    useEffect(
      function checkEditorHistoryActions() {
        return editor.registerUpdateListener(() => {
          setHasRedo(redoStack?.length !== 0);
          setHasUndo(undoStack?.length !== 0);
        });
      },
      [editor, undoStack, redoStack]
    );
  
    return (
      <>
        {MandatoryPlugins}
        <div style={{display: 'flex', gap: '0.75rem', marginTop: '1rem', marginBottom: '1rem'}}>
          <ActionButton
            disabled={isEditorEmpty}
            onClick={() => {
                console.log('Clearcommand dispatch called!');
              editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
            }}
          >
            {ActionIcons.Clear}
          </ActionButton>
          <div style={{display: 'flex', gap: '0.25rem'}}>
            <ActionButton
              disabled={!hasUndo}
              onClick={() => {
                editor.dispatchCommand(UNDO_COMMAND, undefined);
              }}
            >
              {ActionIcons.Undo}
            </ActionButton>
            <ActionButton
              disabled={!hasRedo}
              onClick={() => {
                editor.dispatchCommand(REDO_COMMAND, undefined);
              }}
            >
              {ActionIcons.Redo}
            </ActionButton>
          </div>
        </div>
      </>
    );
  }