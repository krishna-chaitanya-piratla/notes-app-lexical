import { LexicalEditor, LexicalEditorProps } from "./Editor/Editor"

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
      <LexicalEditor config={props.config}/>
    </>
  )
}

export default App
