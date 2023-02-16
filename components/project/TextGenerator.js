import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Swal from 'sweetalert2'

function TextGenerator({ isPro, setLoading, projectName, setOutput, prompt, setPrompt, mood, setMood, words, setWords  }) {



  const handleChange = (event) => {
    setMood(event.target.value)
  }

  const runQuery = async () => {
    if (words % 500 != 0 || words < 500 || words > 5000) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:
          'No. of words can only be in the range 500-5000 in multiples of 500.',
      })
    } else {
      setLoading(true)
      const res = await fetch(`/api/openai`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectName,
          prompt,
          mood,
          words,
        }),
      })
      const res2 = await res.json()
      const typeText = (text) => {
        let index = 0
        const type = () => {
          if (index < text.length) {
            setOutput((currentOutput) => currentOutput + text.charAt(index))
            index++
            setTimeout(type, 20)
          }
        }
        type()
      }

      if (res2.data) {
        console.log(res2)
        setLoading(false)
        typeText(res2.data)
      }
      if (res2) {
        setLoading(false)
      }
    }
  }



  return (
    <>
        <div className="mt-2 md:w-[30vw]">
          <div className="mt-1 bg-gray-50 p-4 rounded-lg ">
            <div className="">
              <h1>Generate with AI</h1>
            </div>
            <TextField
              id="outlined-multiline-static"
              label="Query"
              className="w-full mt-2 mb-2"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              helperText="For eg. Sales/Blog/Story on Global Warming"
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Mood</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={mood}
                label="Mood"
                onChange={handleChange}
              >
                <MenuItem value={'angry'}>Angry</MenuItem>
                <MenuItem value={'sad'}>Sad</MenuItem>
                <MenuItem value={'presuasive'}>Presuasive</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-multiline-static"
              label="No. of words"
              className="w-full mt-2 mb-2"
              defaultValue={500}
              type="number"
              inputProps={{ step: 500, min: 500, max: 5000 }}
              value={words}
              helperText="Only multiples of 500 allowed"
              onChange={(e) => {
                if (e.target.value > 2000 && !isPro) {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Upgrade to generate more words!',
                  })
                } else {
                  setWords(e.target.value)
                }
              }}
            />
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

export default TextGenerator

