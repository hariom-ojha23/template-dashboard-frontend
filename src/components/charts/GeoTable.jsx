import React from 'react'
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import GeoChart from './GeoChart'
import { Box } from '@mui/system'

const GeoTable = (props) => {
  let totalRel = 0
  props.data.tableData.forEach((x) => (totalRel += x.total))

  return (
    <Paper sx={{ borderRadius: 4, overflow: 'hidden', p: 2, boxShadow: 4 }}>
      <Box>
        <Typography
          variant="h4"
          component="h4"
          sx={{ my: 2, mx: 1.5, fontSize: 26 }}
        >
          Relevance Count Of Top Countries
        </Typography>
      </Box>
      <Grid container spacing={1.5}>
        <Grid
          item
          xs={12}
          lg={5}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <TableContainer className="tableContainer" sx={{ height: 350 }}>
            <Table stickyHeader sx={{ minWidth: 550 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: '600' }}>Country Name</TableCell>
                  <TableCell sx={{ fontWeight: '600' }} align="center">
                    Relevance
                  </TableCell>
                  <TableCell sx={{ fontWeight: '600' }} align="center">
                    Relevance %
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.tableData.map((row) => (
                  <TableRow
                    key={row.country}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.country}
                    </TableCell>
                    <TableCell align="center">{row.total}</TableCell>
                    <TableCell align="center">
                      {((row.total / totalRel) * 100).toPrecision(3)}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} lg={7}>
          <GeoChart data={props.data.chartData} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default React.memo(GeoTable)
