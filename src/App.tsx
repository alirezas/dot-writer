import { LexicalComposer } from "@lexical/react/LexicalComposer";
import Editor from "./components/Editor";
import Theme from "./themes/Theme";

function App() {

  const initialConfig = {
    namespace: "dot",
    theme: Theme,
    onError: (error: Error) => {
      throw error;
    },
  };
  return (
    <div className="App">
      <LexicalComposer initialConfig={initialConfig}>
        <div className="editor-shell">
          <Editor />
        </div>
      </LexicalComposer>
    </div>
  );
}

export default App;
