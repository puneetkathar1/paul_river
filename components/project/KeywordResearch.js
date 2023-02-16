import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'

function KeywordResearch({
  isPro,
  setLoading,
  projectName,
  setData,
  setOpen,
  requestsLeft,
  options,
}) {
  const [keywordInput, setKeywordInput] = useState()
  const [database, setDatabase] = React.useState(0)
  const handleDBChange = (event, value) => {
    setDatabase(value.label)
  }

  const submitKeyword = async (e) => {
    e.preventDefault()
    console.log(keywordInput)
    setLoading(true)

    // Organic Results
    // https://api.semrush.com/?type=phrase_organic&key=YOUR_API_KEY&phrase=seo&export_columns=Dn,Ur,Fk,Fp&database=us&display_limit=10
    const res = await fetch(`/api/semrush/getResults`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keywordInput, projectName, isPro, database }),
    })
    const res2 = await res.json()
    console.log(res2.message)
    if (res2.data) {
      //Open Modal Showing list of archived
      setData(res2.data)
      setOpen(true)
    }
    if (res2) {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-50 m-auto p-4 rounded-lg w-[85vw]">
      <div className="m-auto w-full">
        <h1>Keyword Research</h1>
        {requestsLeft > 0
          ? '(' + requestsLeft + ' Request left)'
          : 'You have exausted your daily credits, will renew tomorrow!'}
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Search Keyword"
          className="w-full mt-2"
          value={keywordInput}
          onChange={(e) => setKeywordInput(e.target.value)}
          hidden={requestsLeft == 0}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 95 }}
          className="mt-2"
          onChange={handleDBChange}
          renderInput={(params) => <TextField {...params} label="DB" />}
          hidden={requestsLeft == 0}
        />
        <Button
          onClick={() => setOpen(true)}
          className="mt-2 text-white bg-black mr-1"
        >
          Archived Results
        </Button>
        <Button
          onClick={(e) => submitKeyword(e)}
          className="mt-2 text-white bg-black ml-1"
          hidden={requestsLeft == 0}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default KeywordResearch
