import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Button,
} from '@mui/material'
import Filter from './filters/Filter'
import {
  getFilteredAreaData,
  getFilteredBarData,
  getFilteredDiffData,
  getFilteredGeoData,
  getFilteredLineData,
  getFilteredPieData,
  getFilteredSliceData,
  getFilteredTableData,
} from '../redux/actions'

const FilterDialog = (props) => {
  const [regions, setRegions] = useState([])
  const [countries, setCountries] = useState([])
  const [topics, setTopics] = useState([])
  const [sources, setSources] = useState([])
  const [sectors, setSectors] = useState([])
  const [endYears, setEndYears] = useState([])

  const { filterData } = props
  const dispatch = useDispatch()

  const handleCountryChange = (event) => {
    const {
      target: { value },
    } = event
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }

  const handleSectorChange = (event) => {
    const {
      target: { value },
    } = event
    setSectors(typeof value === 'string' ? value.split(',') : value)
  }

  const handleRegionChange = (event) => {
    const {
      target: { value },
    } = event
    setRegions(typeof value === 'string' ? value.split(',') : value)
  }
  const handleTopicChange = (event) => {
    const {
      target: { value },
    } = event
    setTopics(typeof value === 'string' ? value.split(',') : value)
  }
  const handleSourceChange = (event) => {
    const {
      target: { value },
    } = event
    setSources(typeof value === 'string' ? value.split(',') : value)
  }
  const handleYearChange = (event) => {
    const {
      target: { value },
    } = event
    setEndYears(typeof value === 'string' ? value.split(',') : value)
  }

  const applyFilter = () => {
    const data = {
      match: {},
    }
    if (countries.length > 0) {
      data.match['country'] = { $in: countries }
    }
    if (regions.length > 0) {
      data.match['region'] = { $in: regions }
    }
    if (sectors.length > 0) {
      data.match['sector'] = { $in: sectors }
    }
    if (topics.length > 0) {
      data.match['topic'] = { $in: topics }
    }
    if (sources.length > 0) {
      data.match['source'] = { $in: sources }
    }
    if (endYears.length > 0) {
      data.match['end_year'] = { $in: endYears }
    }

    dispatch(getFilteredAreaData(data))
    dispatch(getFilteredBarData(data))
    dispatch(getFilteredDiffData(data))
    dispatch(getFilteredGeoData(data))
    dispatch(getFilteredLineData(data))
    dispatch(getFilteredPieData(data))
    dispatch(getFilteredSliceData(data))
    dispatch(getFilteredTableData(data))

    props.setOpenDialog(false)
  }

  return (
    <Dialog open={props.openDialog} onClose={() => props.setOpenDialog(false)}>
      <DialogTitle>Filters</DialogTitle>
      <DialogContent sx={{ width: { sm: 550 } }}>
        <Grid container spacing={2} sx={{ p: 1 }}>
          <Grid item xs={12} sm={6}>
            <Filter
              label="Countries"
              data={filterData.country}
              dataList={countries}
              handleChange={handleCountryChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Filter
              label="Sectors"
              data={filterData.sector}
              dataList={sectors}
              handleChange={handleSectorChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Filter
              label="Topics"
              data={filterData.topic}
              dataList={topics}
              handleChange={handleTopicChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Filter
              label="Regions"
              data={filterData.region}
              dataList={regions}
              handleChange={handleRegionChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Filter
              label="Sources"
              data={filterData.source}
              dataList={sources}
              handleChange={handleSourceChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Filter
              label="End Years"
              data={filterData.end_year}
              dataList={endYears}
              handleChange={handleYearChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.setOpenDialog(false)}>Cancel</Button>
        <Button onClick={() => applyFilter()}>Apply</Button>
      </DialogActions>
    </Dialog>
  )
}

export default React.memo(FilterDialog)
