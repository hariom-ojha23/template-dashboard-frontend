import React from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  useTheme,
} from '@mui/material'

function getStyles(name, data, theme) {
  return {
    fontWeight:
      data.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
    },
  },
}

const Filter = (props) => {
  const theme = useTheme()
  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select
        multiple
        input={<OutlinedInput label={props.label} />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        value={props.dataList}
        onChange={props.handleChange}
      >
        {props.data.map((name, i) => (
          <MenuItem
            key={i}
            value={name}
            style={getStyles(name, props.dataList, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Filter
