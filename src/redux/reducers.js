import * as C from './constants'

export const pieReducer = (state = { pieChart: [] }, action) => {
  switch (action.type) {
    case C.PIE_CHART_REQUEST:
      return { pieLoading: true, pieChart: [] }
    case C.PIE_CHART_SUCCESS:
      return {
        pieLoading: false,
        pieChart: action.payload,
      }
    case C.PIE_CHART_FAIL:
      return {
        pieLoading: false,
        pieChart: [],
        error: action.payload,
      }

    default:
      return state
  }
}
export const sliceReducer = (state = { sliceChart: [] }, action) => {
  switch (action.type) {
    case C.SLICE_CHART_REQUEST:
      return { sliceLoading: true, sliceChart: [] }
    case C.SLICE_CHART_SUCCESS:
      return {
        sliceLoading: false,
        sliceChart: action.payload,
      }
    case C.SLICE_CHART_FAIL:
      return {
        sliceLoading: false,
        sliceChart: [],
        error: action.payload,
      }

    default:
      return state
  }
}
export const diffReducer = (
  state = { diffChart: { startYear: [], endYear: [] } },
  action
) => {
  switch (action.type) {
    case C.DIFF_CHART_REQUEST:
      return { diffLoading: true, diffChart: { startYear: [], endYear: [] } }
    case C.DIFF_CHART_SUCCESS:
      return {
        diffLoading: false,
        diffChart: action.payload,
      }
    case C.DIFF_CHART_FAIL:
      return {
        diffLoading: false,
        diffChart: { startYear: [], endYear: [] },
        error: action.payload,
      }

    default:
      return state
  }
}
export const geoReducer = (
  state = { geoChart: { chartData: [], tableData: [] } },
  action
) => {
  switch (action.type) {
    case C.GEO_DATA_REQUEST:
      return { geoLoading: true, geoChart: { chartData: [], tableData: [] } }
    case C.GEO_DATA_SUCCESS:
      return {
        geoLoading: false,
        geoChart: action.payload,
      }
    case C.GEO_DATA_FAIL:
      return {
        geoLoading: false,
        geoChart: { chartData: [], tableData: [] },
        error: action.payload,
      }

    default:
      return state
  }
}
export const lineReducer = (state = { lineChart: [] }, action) => {
  switch (action.type) {
    case C.LINE_CHART_REQUEST:
      return { lineLoading: true, lineChart: [] }
    case C.LINE_CHART_SUCCESS:
      return {
        lineLoading: false,
        lineChart: action.payload,
      }
    case C.LINE_CHART_FAIL:
      return {
        lineLoading: false,
        lineChart: [],
        error: action.payload,
      }

    default:
      return state
  }
}
export const barReducer = (state = { barChart: [] }, action) => {
  switch (action.type) {
    case C.BAR_CHART_REQUEST:
      return { barLoading: true, barChart: [] }
    case C.BAR_CHART_SUCCESS:
      return {
        barLoading: false,
        barChart: action.payload,
      }
    case C.BAR_CHART_FAIL:
      return {
        barLoading: false,
        barChart: [],
        error: action.payload,
      }

    default:
      return state
  }
}
export const areaReducer = (state = { areaChart: [] }, action) => {
  switch (action.type) {
    case C.AREA_CHART_REQUEST:
      return { areaLoading: true, areaChart: [] }
    case C.AREA_CHART_SUCCESS:
      return {
        areaLoading: false,
        areaChart: action.payload,
      }
    case C.AREA_CHART_FAIL:
      return {
        areaLoading: false,
        areaChart: [],
        error: action.payload,
      }

    default:
      return state
  }
}
export const tableReducer = (state = { tableData: [] }, action) => {
  switch (action.type) {
    case C.DATA_TABLE_REQUEST:
      return { tableLoading: true, tableData: [] }
    case C.DATA_TABLE_SUCCESS:
      return {
        tableLoading: false,
        tableData: action.payload,
      }
    case C.DATA_TABLE_FAIL:
      return {
        tableLoading: false,
        tableData: [],
        error: action.payload,
      }

    default:
      return state
  }
}
