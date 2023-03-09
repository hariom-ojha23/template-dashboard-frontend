import axios from 'axios'
import API_SERVICE from '../URI'
import * as C from './constants'

export const getPieData = () => async (dispatch) => {
  try {
    dispatch({ type: C.PIE_CHART_REQUEST })

    const { data } = await axios.get(`${API_SERVICE}/api/v1/main/sectorCount`)

    data.splice(0, 0, ['Sectors', 'Count'])

    dispatch({ type: C.PIE_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.PIE_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getSliceData = () => async (dispatch) => {
  try {
    dispatch({ type: C.SLICE_CHART_REQUEST })

    const { data } = await axios.get(`${API_SERVICE}/api/v1/main/pestleCount`)

    data.splice(0, 0, ['Pestle', 'Count'])

    dispatch({ type: C.SLICE_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.SLICE_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getDiffData = () => async (dispatch) => {
  try {
    dispatch({ type: C.DIFF_CHART_REQUEST })

    const { data } = await axios.get(`${API_SERVICE}/api/v1/main/yearCount`)

    data.startYear.splice(0, 0, ['Year', 'Count'])
    data.endYear.splice(0, 0, ['Year', 'Count'])

    dispatch({ type: C.DIFF_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.DIFF_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getGeoData = () => async (dispatch) => {
  try {
    dispatch({ type: C.GEO_DATA_REQUEST })

    const { data } = await axios.get(
      `${API_SERVICE}/api/v1/main/countryRelevance`
    )

    data.chartData.splice(0, 0, ['Country', 'Relevance'])

    dispatch({ type: C.GEO_DATA_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.GEO_DATA_FAIL,
      payload: error.message,
    })
  }
}

export const getLineData = () => async (dispatch) => {
  try {
    dispatch({ type: C.LINE_CHART_REQUEST })

    const { data } = await axios.get(
      `${API_SERVICE}/api/v1/main/sectorIntensity`
    )

    data.splice(0, 0, ['Sector', 'Intensity'])

    dispatch({ type: C.LINE_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.LINE_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getBarData = () => async (dispatch) => {
  try {
    dispatch({ type: C.BAR_CHART_REQUEST })

    const { data } = await axios.get(
      `${API_SERVICE}/api/v1/main/pestleIntensity`
    )

    data.splice(0, 0, ['Pestle', 'Intensity'])

    dispatch({ type: C.BAR_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.BAR_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getAreaData = () => async (dispatch) => {
  try {
    dispatch({ type: C.AREA_CHART_REQUEST })

    const { data } = await axios.get(
      `${API_SERVICE}/api/v1/main/regionLikelihood`
    )

    data.splice(0, 0, ['Region', 'Likelihood'])

    dispatch({ type: C.AREA_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.AREA_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getTableData = () => async (dispatch) => {
  try {
    dispatch({ type: C.DATA_TABLE_REQUEST })

    const { data } = await axios.get(`${API_SERVICE}/api/v1/main/dataTable`)

    dispatch({ type: C.DATA_TABLE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.DATA_TABLE_FAIL,
      payload: error.message,
    })
  }
}

// ************************************* GETTING FILTER DATA ********************************************* //

export const getFilteredPieData = (body) => async (dispatch) => {
  try {
    dispatch({ type: C.PIE_CHART_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${API_SERVICE}/api/v1/main/filter/sectorCount`,
      body,
      config
    )

    data.splice(0, 0, ['Sectors', 'Count'])

    dispatch({ type: C.PIE_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.PIE_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getFilteredSliceData = (body) => async (dispatch) => {
  try {
    dispatch({ type: C.SLICE_CHART_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${API_SERVICE}/api/v1/main/filter/pestleCount`,
      body,
      config
    )

    data.splice(0, 0, ['Pestle', 'Count'])

    dispatch({ type: C.SLICE_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.SLICE_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getFilteredDiffData = (body) => async (dispatch) => {
  try {
    dispatch({ type: C.DIFF_CHART_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${API_SERVICE}/api/v1/main/filter/yearCount`,
      body,
      config
    )

    data.startYear.splice(0, 0, ['Year', 'Count'])
    data.endYear.splice(0, 0, ['Year', 'Count'])

    dispatch({ type: C.DIFF_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.DIFF_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getFilteredGeoData = (body) => async (dispatch) => {
  try {
    dispatch({ type: C.GEO_DATA_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${API_SERVICE}/api/v1/main/filter/countryRelevance`,
      body,
      config
    )

    data.chartData.splice(0, 0, ['Country', 'Relevance'])

    dispatch({ type: C.GEO_DATA_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.GEO_DATA_FAIL,
      payload: error.message,
    })
  }
}

export const getFilteredLineData = (body) => async (dispatch) => {
  try {
    dispatch({ type: C.LINE_CHART_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${API_SERVICE}/api/v1/main/filter/sectorIntensity`,
      body,
      config
    )

    data.splice(0, 0, ['Sector', 'Intensity'])

    dispatch({ type: C.LINE_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.LINE_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getFilteredBarData = (body) => async (dispatch) => {
  try {
    dispatch({ type: C.BAR_CHART_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${API_SERVICE}/api/v1/main/filter/pestleIntensity`,
      body,
      config
    )

    data.splice(0, 0, ['Pestle', 'Intensity'])

    dispatch({ type: C.BAR_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.BAR_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getFilteredAreaData = (body) => async (dispatch) => {
  try {
    dispatch({ type: C.AREA_CHART_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${API_SERVICE}/api/v1/main/filter/regionLikelihood`,
      body,
      config
    )

    data.splice(0, 0, ['Region', 'Likelihood'])

    dispatch({ type: C.AREA_CHART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.AREA_CHART_FAIL,
      payload: error.message,
    })
  }
}

export const getFilteredTableData = (body) => async (dispatch) => {
  try {
    dispatch({ type: C.DATA_TABLE_REQUEST })

    console.log(body)

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${API_SERVICE}/api/v1/main/filter/dataTable`,
      body,
      config
    )

    dispatch({ type: C.DATA_TABLE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: C.DATA_TABLE_FAIL,
      payload: error.message,
    })
  }
}
