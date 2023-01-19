import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { useState } from "react";

export default function Editor(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  const placeholder = <div className="Placeholder__root">شروع...</div>;

  return (
    <>
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={
            <div className="editor-scroller">
              <div className="editor" ref={onRef}>
                <ContentEditable className="ContentEditable__root" />
              </div>
            </div>
          }
          placeholder={placeholder}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <AutoFocusPlugin />
      </div>
    </>
  );
}
