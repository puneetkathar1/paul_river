import React, { useEffect, useState, useRef } from 'react'

// Solution-1 start
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// --- end

function Editor({ output, setOutput }) {
  // Solution-2 start
  let editorRef = useRef()
  const { CKEditor, ClassicEditor } = editorRef.current || {}
  // --- end
  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Solution-2 start
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    }
    // --- end

    setLoaded(true)
  }, []) // run on mounting

  if (loaded) {
    return (
      <CKEditor
        editor={ClassicEditor}
        data={output}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor)
        }}
        onChange={(event, editor) => {
          // do something when editor's content changed
          const data = editor.getData()
          // setOutput(data)
          console.log({ event, editor, data })
        }}

        onBlur={(event, editor) => {
          console.log('Blur.', editor)
          setOutput(editor.getData())
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor)
        }}
      />
    )
  } else {
    return <h2> Editor is loading </h2>
  }
}

export default Editor
