import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import dayjs from 'dayjs'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BasicModal({
  open,
  setOpen,
  data,
  setOpen2,
  setData2,
}) {
  const handleClose = () => setOpen(false)
  const [reversedData, setReversedData] = React.useState([])
  const [search, setSearch] = React.useState('')

  //Date
  const [value, setValue] = React.useState(null)
  const handleDateChange = (newValue) => {
    setValue(newValue)
  }

  React.useEffect(() => {
    if (data && data.archive && data.archive.length > 0) {
      setReversedData([...data.archive].reverse())
    }
  }, [data])

  const filteredData = reversedData.filter((el) => {
    if (value && value.$d && value.$d != 'Invalid Date') {
      var d = new Date(value.$d)
      var d2 = new Date(el.date)

      return (
        data &&
        data.archive.length > 0 &&
        el.overview[0].Keyword.includes(search) &&
        d.getDate() === d2.getDate() &&
        d.getMonth() === d2.getMonth() &&
        d.getFullYear() === d2.getFullYear()
      )
    } else {
      return (
        data &&
        data.archive.length > 0 &&
        el.overview[0].Keyword &&
        el.overview[0].Keyword.includes(search)
      )
    }
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-center mb-4">Keyword Search History</h1>

          <TextField
            id="outlined-multiline-static"
            label="Search...."
            className="m-2 pr-4 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleDateChange}
                className="m-2 pr-4 w-full"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          {reversedData && reversedData.length > 0
            ? filteredData.map((d, i) => {
                return (
                  <div
                    onClick={() => {
                      setData2(d)
                      setOpen(false)
                    }}
                    key={i}
                  >
                    <h3
                      id="modal-modal-title"
                      className="text-center m-2 p-2 border-2 border-black"
                    >
                      {d.overview[0].Keyword}{' '}
                      <i className="bx bx-link-external"></i>
                    </h3>
                  </div>
                )
              })
            : null}
        </Box>
      </Modal>
    </div>
  )
}
