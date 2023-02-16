import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextGenerator from './project/TextGenerator'
import ImageGenerator from './project/ImageGenerator'
import KeywordResearch from './project/KeywordResearch'
import EditorComponent from './project/EditorComponent'
import NestedModal from './NestedModal'
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function VerticalTabs({
  isPro,
  projectName,
  open,
  setOpen,
  open2,
  setOpen2,
  loading,
  setLoading,
  output,
  setOutput,
  data2,
  setData2,
  requestsLeft,
  setrequestsLeft,
  data,
  setData,
  options,
  prompt,
  setPrompt,
  mood,
  setMood,
  words,
  setWords,
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
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box className="grow text-center lg:flex">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        className="lg:w-[8rem]"
      >
        <Tab className="m-auto" label="Text Generator" {...a11yProps(0)} />
        <Tab className="m-auto" label="Keyword Research" {...a11yProps(1)} />
        <Tab className="m-auto" label="Image Generator" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="flex flex-col md:flex-row">
          <TextGenerator
            isPro={isPro}
            setLoading={setLoading}
            projectName={projectName}
            setOutput={setOutput}
            prompt={prompt}
            setPrompt={setPrompt}
            mood={mood}
            setMood={setMood}
            words={words}
            setWords={setWords}
          />
          <EditorComponent output={output} setOutput={setOutput} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <KeywordResearch
            isPro={isPro}
            setLoading={setLoading}
            projectName={projectName}
            setData={setData}
            setOpen={setOpen}
            requestsLeft={requestsLeft}
            options={options}
          />
          {data2 && data2.related ? (
            <NestedModal
              open2={open2}
              setOpen2={setOpen2}
              data2={data2}
              isPro={isPro}
              options={options}
            />
          ) : null}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="flex flex-col md:flex-row">
          <ImageGenerator
            isPro={isPro}
            setLoading={setLoading}
            projectName={projectName}
            setOutput={setOutput}
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
          <EditorComponent output={imageOutput} setOutput={setImageOutput} />
        </div>
      </TabPanel>
    </Box>
  )
}
