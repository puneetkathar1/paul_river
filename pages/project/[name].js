import React, { useState } from 'react'
import NavbarThree from '../../components/Layouts/NavbarThree'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField'
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'
import { Button } from '@mui/material'
import BasicModal from '../../components/Modal'
import ImageHistoryModal from '../../components/ImageHistory'
import NestedModal from '../../components/NestedModal'
import Tabs from '../../components/Tabs'
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Swal from 'sweetalert2'
import Box from '@mui/material/Box'
import Loader from '../../components/Shared/Loader'
import Editor from '../../components/editor'
import Autocomplete from '@mui/material/Autocomplete'

function ProjectName({ isPro }) {
  const router = useRouter()
  const [data, setData] = useState()
  const [requestsLeft, setrequestsLeft] = useState()
  const [data2, setData2] = useState([])
  const [output, setOutput] = React.useState('')
  const [imageOutput, setImageOutput] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [prompt, setPrompt] = useState()
  const [mood, setMood] = React.useState('')
  const [words, setWords] = React.useState(500)
  const [imagePrompt, setImagePrompt] = useState()
  const [images, setImages] = React.useState(0)
  const [imageHistory, setImageHistory] = React.useState()

  let options = [
    {
      label: 'si',
      value: 0,
    },
    {
      label: 'ba',
      value: 1,
    },
    {
      label: 'gr',
      value: 2,
    },
    {
      label: 'uk',
      value: 3,
    },
    {
      label: 'it',
      value: 4,
    },
    {
      label: 'cm',
      value: 5,
    },
    {
      label: 'tw',
      value: 6,
    },
    {
      label: 'id',
      value: 7,
    },
    {
      label: 'sv',
      value: 8,
    },
    {
      label: 'mz',
      value: 9,
    },
    {
      label: 'ht',
      value: 10,
    },
    {
      label: 'kh',
      value: 11,
    },
    {
      label: 'mx',
      value: 12,
    },
    {
      label: 'hn',
      value: 13,
    },
    {
      label: 'pe',
      value: 14,
    },
    {
      label: 'cl',
      value: 15,
    },
    {
      label: 'by',
      value: 16,
    },
    {
      label: 'za',
      value: 17,
    },
    {
      label: 'me',
      value: 18,
    },
    {
      label: 'de',
      value: 19,
    },
    {
      label: 'ee',
      value: 20,
    },
    {
      label: 'pt',
      value: 21,
    },
    {
      label: 'rs',
      value: 22,
    },
    {
      label: 'ma',
      value: 23,
    },
    {
      label: 'zw',
      value: 24,
    },
    {
      label: 'fr',
      value: 25,
    },
    {
      label: 'bn',
      value: 26,
    },
    {
      label: 'ly',
      value: 27,
    },
    {
      label: 'lv',
      value: 28,
    },
    {
      label: 'ru',
      value: 29,
    },
    {
      label: 'bd',
      value: 30,
    },
    {
      label: 'na',
      value: 31,
    },
    {
      label: 'lu',
      value: 32,
    },
    {
      label: 'tn',
      value: 33,
    },
    {
      label: 'bg',
      value: 34,
    },
    {
      label: 'dk',
      value: 35,
    },
    {
      label: 'ie',
      value: 36,
    },
    {
      label: 'jm',
      value: 37,
    },
    {
      label: 'mn',
      value: 38,
    },
    {
      label: 'nl',
      value: 39,
    },
    {
      label: 'tt',
      value: 40,
    },
    {
      label: 'vn',
      value: 41,
    },
    {
      label: 'tr',
      value: 42,
    },
    {
      label: 'zm',
      value: 43,
    },
    {
      label: 'pa',
      value: 44,
    },
    {
      label: 'es',
      value: 45,
    },
    {
      label: 'jp',
      value: 46,
    },
    {
      label: 'ar',
      value: 47,
    },
    {
      label: 'ni',
      value: 48,
    },
    {
      label: 'il',
      value: 49,
    },
    {
      label: 'ge',
      value: 50,
    },
    {
      label: 'al',
      value: 51,
    },
    {
      label: 'bh',
      value: 52,
    },
    {
      label: 'ca',
      value: 53,
    },
    {
      label: 'co',
      value: 54,
    },
    {
      label: 'bw',
      value: 55,
    },
    {
      label: 'br',
      value: 56,
    },
    {
      label: 'gh',
      value: 57,
    },
    {
      label: 'in',
      value: 58,
    },
    {
      label: 'uy',
      value: 59,
    },
    {
      label: 'af',
      value: 60,
    },
    {
      label: 'lb',
      value: 61,
    },
    {
      label: 'np',
      value: 62,
    },
    {
      label: 'pk',
      value: 63,
    },
    {
      label: 'us',
      value: 64,
    },
    {
      label: 'bs',
      value: 65,
    },
    {
      label: 'cz',
      value: 66,
    },
    {
      label: 'bo',
      value: 67,
    },
    {
      label: 'kw',
      value: 68,
    },
    {
      label: 'pl',
      value: 69,
    },
    {
      label: 'sk',
      value: 70,
    },
    {
      label: 'at',
      value: 71,
    },
    {
      label: 'eg',
      value: 72,
    },
    {
      label: 'et',
      value: 73,
    },
    {
      label: 'bz',
      value: 74,
    },
    {
      label: 'sg',
      value: 75,
    },
    {
      label: 'cv',
      value: 76,
    },
    {
      label: 'hr',
      value: 77,
    },
    {
      label: 'ec',
      value: 78,
    },
    {
      label: 've',
      value: 79,
    },
    {
      label: 'kz',
      value: 80,
    },
    {
      label: 'lt',
      value: 81,
    },
    {
      label: 'sa',
      value: 82,
    },
    {
      label: 'cy',
      value: 83,
    },
    {
      label: 'sn',
      value: 84,
    },
    {
      label: 'qa',
      value: 85,
    },
    {
      label: 'dz',
      value: 86,
    },
    {
      label: 'au',
      value: 87,
    },
    {
      label: 'mg',
      value: 88,
    },
    {
      label: 'nz',
      value: 89,
    },
    {
      label: 'md',
      value: 90,
    },
    {
      label: 'do',
      value: 91,
    },
    {
      label: 'ao',
      value: 92,
    },
    {
      label: 'hu',
      value: 93,
    },
    {
      label: 'my',
      value: 94,
    },
    {
      label: 'hk',
      value: 95,
    },
    {
      label: 'ng',
      value: 96,
    },
    {
      label: 'om',
      value: 97,
    },
    {
      label: 'jo',
      value: 98,
    },
    {
      label: 'py',
      value: 99,
    },
    {
      label: 'ro',
      value: 100,
    },
    {
      label: 'ua',
      value: 101,
    },
    {
      label: 'lk',
      value: 102,
    },
    {
      label: 'gt',
      value: 103,
    },
    {
      label: 'am',
      value: 104,
    },
    {
      label: 'mt',
      value: 105,
    },
    {
      label: 'fi',
      value: 106,
    },
    {
      label: 'th',
      value: 107,
    },
    {
      label: 'ph',
      value: 108,
    },
    {
      label: 'is',
      value: 109,
    },
    {
      label: 'mu',
      value: 110,
    },
    {
      label: 'ch',
      value: 111,
    },
    {
      label: 'be',
      value: 112,
    },
    {
      label: 'cd',
      value: 113,
    },
    {
      label: 'cr',
      value: 114,
    },
    {
      label: 'no',
      value: 115,
    },
    {
      label: 'ae',
      value: 116,
    },
    {
      label: 'kr',
      value: 117,
    },
    {
      label: 'se',
      value: 118,
    },
    {
      label: 'az',
      value: 119,
    },
    {
      label: 'gy',
      value: 120,
    },
  ]

  //Modal
  const [open, setOpen] = React.useState(false)
  //Nested Modal
  const [open2, setOpen2] = React.useState(false)
  // Modal 2
  const [open3, setOpen3] = React.useState(false)

  //Call API to find project
  const projectName = router.query['name']
  const findProject = async () => {
    setLoading(true)
    const res = await fetch(`/api/project/find`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectName,
      }),
    })
    const res2 = await res.json()
    if (res2.data) {
      console.log(res2)
      setData(res2.data)
      setrequestsLeft(res2.requestsLeft)
      setPrompt(res2.data.query)
      setMood(res2.data.mood)
      setWords(res2.data.words > 0 ? res2.data.words : 500)
      setImages(0)
      setLoading(false)
      setImageHistory(res2.data.images)
    } else if (res2.error == 'Project doesnt exists!') {
      return router.push('/404')
    }
  }

  React.useEffect(() => {
    findProject()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, open2])

  return (
    <>
      <NavbarThree isPro={isPro} />

      <Tabs
        isPro={isPro}
        projectName={projectName}
        open={open}
        setOpen={setOpen}
        open2={open2}
        setOpen2={setOpen2}
        loading={loading}
        setLoading={setLoading}
        output={output}
        setOutput={setOutput}
        data2={data2}
        setData2={setData2}
        requestsLeft={requestsLeft}
        setrequestsLeft={setrequestsLeft}
        data={data}
        setData={setData}
        options={options}
        prompt={prompt}
        setPrompt={setPrompt}
        mood={mood}
        setMood={setMood}
        words={words}
        setWords={setWords}
        imagePrompt={imagePrompt}
        setImagePrompt={setImagePrompt}
        images={images}
        setImages={setImages}
        open3={open3}
        setOpen3={setOpen3}
        imageHistory={imageHistory}
        imageOutput={imageOutput}
        setImageOutput={setImageOutput}
      />
      {/* <div className="min-h-[80vh] bg-gray-50 rounded-lg p-4 m-2 md:w-[70vw] overflow-hidden">
          <GrammarlyEditorPlugin
            clientId={process.env.NEXT_PUBLIC_GRAMMARLY_CLIENT}
          >
            <Box className="h-[81vh] border-2 border-gray-700 overflow-scroll">
              <Editor output={output} />
            </Box>
          </GrammarlyEditorPlugin>
        </div> */}

      <BasicModal
        setOpen2={setOpen2}
        setData2={setData2}
        open={open}
        setOpen={setOpen}
        data={data}
      />
      <ImageHistoryModal
        open3={open3}
        setOpen3={setOpen3}
        imageHistory={imageHistory}
        setImageOutput={setImageOutput}
        setImagePrompt={setImagePrompt}
        setImages={setImages}
        setOutput={setOutput}
      />
      <Loader loading={loading} />
    </>
  )
}

export default ProjectName

export async function getServerSideProps({ res, req }) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session) {
    const checkPro = async () => {
      const res = await axios(`${baseUrl}/api/verifySubscription`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          email: session.user.email,
        }),
      })
      // const res2 = await res.json()
      return await res.data.message
    }
    const isPro = await checkPro()

    return {
      props: { isPro },
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }
}
