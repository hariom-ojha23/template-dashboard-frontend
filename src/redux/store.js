import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  pieReducer,
  sliceReducer,
  diffReducer,
  geoReducer,
  lineReducer,
  barReducer,
  areaReducer,
  tableReducer,
} from './reducers'

const reducer = combineReducers({
  pie: pieReducer,
  slice: sliceReducer,
  diff: diffReducer,
  geo: geoReducer,
  line: lineReducer,
  bar: barReducer,
  area: areaReducer,
  table: tableReducer,
})

const pieStorage = localStorage.getItem('pieChart')
  ? JSON.parse(localStorage.getItem('pieChart'))
  : []

const sliceStorage = localStorage.getItem('sliceChart')
  ? JSON.parse(localStorage.getItem('sliceChart'))
  : []

const diffStorage = localStorage.getItem('diffChart')
  ? JSON.parse(localStorage.getItem('diffChart'))
  : { startYear: [], endYear: [] }

const geoStorage = localStorage.getItem('geoChart')
  ? JSON.parse(localStorage.getItem('geoChart'))
  : { chartData: [], tableData: [] }

const lineStorage = localStorage.getItem('lineChart')
  ? JSON.parse(localStorage.getItem('lineChart'))
  : []

const barStorage = localStorage.getItem('barChart')
  ? JSON.parse(localStorage.getItem('barChart'))
  : []

const areaStorage = localStorage.getItem('areaChart')
  ? JSON.parse(localStorage.getItem('areaChart'))
  : []

const tableStorage = localStorage.getItem('tableData')
  ? JSON.parse(localStorage.getItem('tableData'))
  : []

const initialState = {
  pie: { pieChart: pieStorage },
  slice: { sliceChart: sliceStorage },
  diff: { diffChart: diffStorage },
  geo: { geoChart: geoStorage },
  line: { lineChart: lineStorage },
  bar: { barChart: barStorage },
  area: { areaChart: areaStorage },
  table: { tableData: tableStorage },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
