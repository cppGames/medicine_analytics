import React, {
  useState,
  useEffect
} from 'react'

import {
  Input,
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from '@material-ui/core'

import {
  makeStyles
} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 120,
  }
}))

const MainParam = (props) => {
 
  const handleChange = (event) => {
    props.callbackSelect(event.target.value)
  }

  return (
    // <FormControl className={classes.formControl}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.value}
        onChange={handleChange}
        // input={<Input />}
        MenuProps={MenuProps}
      >
          {props.items.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

MainParam.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  callbackSelect: PropTypes.func.isRequired
};

MainParam.defaultProps = {
  items: []
};

export default MainParam
