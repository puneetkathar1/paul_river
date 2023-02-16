import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import Swal from 'sweetalert2'

function ImageGenerator({
  isPro,
  setLoading,
  projectName,
  setOutput,
  imagePrompt,
  setImagePrompt,
  images,
  setImages,
  open3,
  setOpen3,
  imageHistory,
  imageOutput,
  setImageOutput,
}) {
  const runQuery = async () => {
    setLoading(true)
    const res = await fetch(`/api/openaiImage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectName,
        prompt: imagePrompt,
        images,
      }),
    })
    const res2 = await res.json()

    if (res2.data) {
      console.log(res2)
      setLoading(false)
      setImageOutput((currentOutput) => currentOutput + res2.data)
    }
    if (res2) {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="mt-2 md:w-[30vw]">
        <div className="mt-1 bg-gray-50 p-4 rounded-lg">
          <div className="">
            <h1>Generate Image with AI</h1>
          </div>
          <TextField
            id="outlined-multiline-static"
            label="Query"
            className="w-full mt-2 mb-2"
            value={imagePrompt}
            onChange={(e) => setImagePrompt(e.target.value)}
            helperText="For eg. Sales/Blog/Story on Global Warming"
          />
          <TextField
            id="outlined-multiline-static"
            label="No. of images to generate"
            className="w-full mt-2 mb-2"
            type="number"
            defaultValue={0}
            InputProps={{ inputProps: { min: 0, max: isPro ? 10 : 1 } }}
            value={images}
            onChange={(e) => {
              if (e.target.value >= 2 && !isPro) {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Upgrade to generate more images!',
                })
              } else {
                setImages(e.target.value)
              }
            }}
          />
          <Button
            onClick={() => setOpen3(true)}
            className="mt-2 text-white bg-black mr-1"
          >
            Archived Results
          </Button>
          <Button
            onClick={(e) => runQuery(e)}
            className="mt-2 text-white bg-black ml-1"
          >
            Generate
          </Button>
        </div>
      </div>
    </>
  )
}

export default ImageGenerator
