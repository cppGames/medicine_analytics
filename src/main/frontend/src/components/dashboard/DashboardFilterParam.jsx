import React from 'react'
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from '@material-ui/core'
import PropTypes from 'prop-types'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const DashboardFilter = (props) => {
  const {id, row, callbackSelect, val} = props

  const handleChange = (event) => {
    const { name, value } = event.target
    callbackSelect(prevState => ({
        ...prevState,
        [id]: value
    }))
  }

  return (
    <FormControl fullWidth>
      <InputLabel id='select-label-field'>{ row.name }</InputLabel>
      <Select
        labelId='select-label-field'
        id='demo-simple-select'
        value={ val[id] || '' }
        onChange={ handleChange }
        MenuProps={ MenuProps }
      >
          <MenuItem value=''>
            <em>Очистить поле</em>
          </MenuItem>
          { row.items.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

DashboardFilter.propTypes = {
  id: PropTypes.string.isRequired,
  row: PropTypes.object.isRequired,
  callbackSelect: PropTypes.func.isRequired,
  val: PropTypes.object.isRequired
}

DashboardFilter.defaultProps = {
  row: {}
}

export default DashboardFilter
