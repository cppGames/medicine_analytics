import React from 'react'

import {
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from '@material-ui/core'

import PropTypes from 'prop-types'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const DashboardFilter = (props) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.callbackSelect(prevState => ({
        ...prevState,
        [props.id]: value
    }))
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.row.name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ props.val[props.id] || ''}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
          <MenuItem value="">
            <em>Очистить поле</em>
          </MenuItem>
          {props.row.items.map((item) => (
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
};

DashboardFilter.defaultProps = {
  row: {}
};

export default DashboardFilter
