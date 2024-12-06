import { LexicalEditor, LexicalEditorProps, Editor } from "./Editor/Editor"

const props: LexicalEditorProps = {
  config: {
    namespace: 'texteditor',
    onError: (error:any) => {
      console.log(error);
    }
  }
}

function App() {

  return (
    <>
      <Editor/>
    </>
  )
}

export default App
