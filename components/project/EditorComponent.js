import React from 'react'
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'
import Editor from '../editor'
import Box from '@mui/material/Box'

function EditorComponent({ output, setOutput }) {
  return (
    <div className="min-h-[80vh] bg-gray-50 rounded-lg p-4 m-2 md:w-[55vw] overflow-hidden">
      <GrammarlyEditorPlugin
        clientId={process.env.NEXT_PUBLIC_GRAMMARLY_CLIENT}
      >
        <Box className="h-[81vh] border-2 border-gray-700 overflow-scroll">
          <Editor setOutput={setOutput} output={output} />
        </Box>
      </GrammarlyEditorPlugin>
    </div>
  )
}

export default EditorComponent
