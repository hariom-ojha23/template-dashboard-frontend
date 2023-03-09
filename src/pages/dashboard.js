import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid } from '@mui/material'
import PieChart from '../components/charts/PieChart'
import SlicePieChart from '../components/charts/SlicePieChart'
import GeoTable from '../components/charts/GeoTable'
import LineChart from '../components/charts/LineChart'
import BarChart from '../components/charts/BarChart'
import DataTable from '../components/charts/DataTable'
import AreaChart from '../components/charts/AreaChart'
import DiffPieChart from '../components/charts/DiffPieChart'
import InfoBox from '../components/charts/InfoBox'

import PublicIcon from '@mui/icons-material/Public'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TopicIcon from '@mui/icons-material/Topic'
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent'

import {
  getAreaData,
  getBarData,
  getDiffData,
  getGeoData,
  getLineData,
  getPieData,
  getSliceData,
  getTableData,
} from '../redux/actions'

import axios from 'axios'
import API_SERVICE from '../URI'

const light = '#f0f2f5'
const infoBoxData = [
  {
    bg: 'linear-gradient(#42424a, #191919)',
    icon: <PublicIcon sx={{ color: light, fontSize: 30 }} />,
    title: 'Total Countries',
    subtitle: '+10% last month',
  },
  {
    bg: 'linear-gradient(#49a3f1, #1A73E8)',
    icon: <LocationOnIcon sx={{ color: light, fontSize: 30 }} />,
    title: 'Total Regions',
    subtitle: '+10% last month',
  },
  {
    bg: 'linear-gradient(#66BB6A, #43A047)',
    icon: <TopicIcon sx={{ color: light, fontSize: 30 }} />,
    title: 'Total Topics',
    subtitle: '+10% last month',
  },
  {
    bg: 'linear-gradient(#EC407A, #D81B60)',
    icon: <WbIncandescentIcon sx={{ color: light, fontSize: 30 }} />,
    title: 'Total Sources',
    subtitle: '+10% last month',
  },
]

const Dashboard = () => {
  const [infoBoxCount, setInfoBoxCount] = useState([0, 0, 0, 0])

  const dispatch = useDispatch()
  const pie = useSelector((state) => state.pie)
  const { pieChart } = pie

  const slice = useSelector((state) => state.slice)
  const { sliceChart } = slice

  const diff = useSelector((state) => state.diff)
  const { diffChart } = diff

  const geo = useSelector((state) => state.geo)
  const { geoChart } = geo

  const line = useSelector((state) => state.line)
  const { lineChart } = line

  const bar = useSelector((state) => state.bar)
  const { barChart } = bar

  const area = useSelector((state) => state.area)
  const { areaChart } = area

  const table = useSelector((state) => state.table)
  const { tableData } = table

  useEffect(() => {
    dispatch(getPieData())
    dispatch(getSliceData())
    dispatch(getDiffData())
    dispatch(getGeoData())
    dispatch(getLineData())
    dispatch(getBarData())
    dispatch(getAreaData())
    dispatch(getTableData())
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${API_SERVICE}/api/v1/main/infoBoxCount`
      )
      setInfoBoxCount(data)
    }
    fetchData()
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      {/* Info Box */}
      <Grid container spacing={3} sx={{ mb: 3, mt: 3 }}>
        {infoBoxData.map((x, i) => (
          <Grid item xs={12} sm={6} lg={3} key={i}>
            <InfoBox
              bg={x.bg}
              icon={x.icon}
              title={x.title}
              subtitle={x.subtitle}
              count={infoBoxCount[i]}
            />
          </Grid>
        ))}
      </Grid>

      {/* Pie Charts */}
      <Grid container spacing={1.5}>
        <Grid item xs={12} sm={6} lg={4}>
          <PieChart data={pieChart} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SlicePieChart data={sliceChart} />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <DiffPieChart data={diffChart} />
        </Grid>
      </Grid>

      {/* Geo Table and Chart */}
      <Box sx={{ my: 3 }}>
        <GeoTable data={geoChart} />
      </Box>

      {/* Line and Bar Chart */}
      <Box sx={{ my: 3 }}>
        <Grid container spacing={1.5}>
          <Grid item xs={12} sm={6}>
            <LineChart data={lineChart} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BarChart data={barChart} />
          </Grid>
        </Grid>
      </Box>

      {/* AreaChart */}
      <Box sx={{ my: 3 }}>
        <Grid container spacing={1.5}>
          <Grid item xs={12} sm={12}>
            <AreaChart data={areaChart} />
          </Grid>
        </Grid>
      </Box>

      {/* Data Table */}
      <Box sx={{ width: '100%' }}>
        <DataTable data={tableData} />
      </Box>
    </Box>
  )
}

export default Dashboard
