import { StyledAppWrapper, StyledH1 } from "./styles/Global"
import { Editor } from "./components/Editor/Editor"

function App() {

  return (
    <StyledAppWrapper>
      <div>
        <StyledH1>Just Take Notes</StyledH1>
      </div>
      <Editor/>
    </StyledAppWrapper>
  )
}

export default App
