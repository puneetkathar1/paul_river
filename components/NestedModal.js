import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Link from 'next/link'
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from '@mui/x-data-grid'
const style = {
  bgcolor: 'background.paper',
  marginTop: 6,
}

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}
export default function NestedModal({
  open2,
  setOpen2,
  data2,
  isPro,
  options,
}) {
  const [rows, setRows] = React.useState([])
  const [rows3, setRows3] = React.useState([])

  const columns = [
    { field: 'keyword', width: 300, headerName: 'Keyword' },
    { field: 'cpc', width: 150, headerName: 'CPC' },
    { field: 'competition', width: 150, headerName: 'Competition' },
    { field: 'results', width: 150, headerName: 'Number of Results' },
    { field: 'related', width: 150, headerName: 'Related Relevance' },
    { field: 'search', width: 150, headerName: 'Search Volume' },
    { field: 'kd', width: 150, headerName: 'KD%' },
  ]

  const columns3 = [
    { field: 'domain', width: 300, headerName: 'Domain' },
    { field: 'url', width: 600, headerName: 'URL' },
  ]

  React.useEffect(() => {
    if (data2 && data2.related && data2.related.length > 0) {
      const rows2 = []
      const rows4 = []

      data2.related.map((d, i) => {
        rows2.push({
          id: i + 1,
          keyword: d.Keyword,
          cpc: d.CPC,
          competition: d.Competition,
          results: d['Number of Results'],
          related: d['Related Relevance'],
          search: d['Search Volume'],
          kd: data2.difficulty[i + 1]
            ? Object.values(data2.difficulty[i + 1])[1]
            : null,
        })
      })
      data2.organic.map((d, i) => {
        rows4.push({
          id: i + 1,
          domain: d.Domain,
          url: d.Url,
        })
      })
      setRows(rows2)
      setRows3(rows4)
    }
  }, [data2])

  return (
    <div>
      <Box sx={style}>
        <div>
          <h1 className="underline underline-offset-1  text-2xl text-left">
            Overview
          </h1>
          <Box sx={{ width: '85vw' }}>
            {rows && rows[0] && rows[0].id ? (
              <DataGrid
                rows={[
                  {
                    id: 1,
                    keyword: data2.overview[0].Keyword,
                    cpc: data2.overview[0].CPC,
                    competition: data2.overview[0].Competition,
                    results: Object.values(data2.overview[0])[6],
                    related: '1',
                    search: data2.overview[0]['Search Volume'],
                    kd: Object.values(data2.difficulty[0])[1],
                  },
                ]}
                hideFooter
                hideFooterPagination
                hideFooterSelectedRowCount
                autoHeight
                columns={columns}
                components={{
                  Toolbar: CustomToolbar,
                }}
              />
            ) : null}
          </Box>
        </div>
        <br />
        <div>
          <h1 className="underline underline-offset-1 text-2xl text-left">
            Organic
          </h1>
          {/* <table>
            <tr>
              <th className="border-2 border-black text-left p-1">Domain</th>
              <th className="border-2 border-black text-left p-1">Url</th>
            </tr>
            {data2.organic
              ? data2.organic.map((d, i) => (
                  <tr key={i}>
                    <td className="border-2 border-black text-left p-1">
                      {d.Domain}
                    </td>
                    <td className="border-2 border-black text-left p-1">
                      {d.Url}
                    </td>
                  </tr>
                ))
              : null}
          </table> */}
          <Box sx={{ width: '85vw' }}>
            {rows3 && rows3[0] && rows3[0].id ? (
              <DataGrid
                pagination
                pageSize={10}
                rowsPerPageOptions={[10]}
                rows={rows3}
                autoHeight
                columns={columns3}
                components={{
                  Toolbar: CustomToolbar,
                }}
              />
            ) : null}
          </Box>
          {isPro ? null : (
            <Link href="/upgrade">
              <a className="default-btn mr-3 mt-2">
                <i className="bx bxs-hot"></i> Upgrade to more.. <span></span>
              </a>
            </Link>
          )}
        </div>
        <br />
        <div>
          <h1 className="underline underline-offset-1 text-2xl text-left">
            Related
          </h1>
          {/* <table>
            <tr>
              <th className="border-2 border-black text-left p-1">Keyword</th>
              <th className="border-2 border-black text-left p-1">CPC</th>
              <th className="border-2 border-black text-left p-1">
                Competition
              </th>
              <th className="border-2 border-black text-left p-1">
                Number of Results
              </th>
              <th className="border-2 border-black text-left p-1">
                Related Relevance
              </th>
              <th className="border-2 border-black text-left p-1">
                Search Volume
              </th>
              <th className="border-2 border-black text-left p-1">KD%</th>
            </tr>
            {data2.organic
              ? data2.related.map((d, i) => (
                  <tr key={i}>
                    <td className="border-2 border-black text-left p-1">
                      {d.Keyword}
                    </td>
                    <td className="border-2 border-black text-left p-1">
                      {d.CPC}
                    </td>
                    <td className="border-2 border-black text-left p-1">
                      {d.Competition}
                    </td>
                    <td className="border-2 border-black text-left p-1">
                      {d['Number of Results']}
                    </td>
                    <td className="border-2 border-black text-left p-1">
                      {d['Related Relevance']}
                    </td>
                    <td className="border-2 border-black text-left p-1">
                      {d['Search Volume']}
                    </td>
                    <td className="border-2 border-black text-left p-1">
                      {data2.difficulty[i + 1]
                        ? Object.values(data2.difficulty[i + 1])[1]
                        : null}
                    </td>
                  </tr>
                ))
              : null}
          </table> */}
          <Box sx={{ width: '85vw' }}>
            {rows && rows[0] && rows[0].id ? (
              <DataGrid
                pagination
                pageSize={10}
                rowsPerPageOptions={[10]}
                rows={rows}
                autoHeight
                columns={columns}
                components={{
                  Toolbar: CustomToolbar,
                }}
              />
            ) : null}
          </Box>
          {isPro ? null : (
            <Link href="/upgrade">
              <a className="default-btn mr-3 mt-2">
                <i className="bx bxs-hot"></i> Upgrade to more.. <span></span>
              </a>
            </Link>
          )}
        </div>
      </Box>
    </div>
  )
}
