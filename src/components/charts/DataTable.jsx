import React from 'react'
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
} from '@mui/material'
import moment from 'moment'

const DataTable = (props) => {
  return (
    <TableContainer
      className="tableContainer"
      sx={{
        height: 500,
        borderRadius: 4,
      }}
      component={Paper}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: '600' }}>Title</TableCell>
            <TableCell sx={{ fontWeight: '600' }} align="left">
              Topic
            </TableCell>
            <TableCell sx={{ fontWeight: '600' }} align="left">
              Source
            </TableCell>
            <TableCell sx={{ fontWeight: '600' }} align="left">
              Insight
            </TableCell>
            <TableCell sx={{ fontWeight: '600' }} align="left">
              URL
            </TableCell>
            <TableCell sx={{ fontWeight: '600' }} align="left">
              Added
            </TableCell>
            <TableCell sx={{ fontWeight: '600' }} align="left">
              Published
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.topic}</TableCell>
              <TableCell align="left">{row.source}</TableCell>
              <TableCell align="left">{row.insight}</TableCell>
              <TableCell align="left">{row.url}</TableCell>
              <TableCell align="left">
                {moment(row.added).format('DD MMMM YYYY')}
              </TableCell>
              <TableCell align="left">
                {moment(row.published).format('DD MMMM YYYY')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
