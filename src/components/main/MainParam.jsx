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
  makeStyles,
  useTheme
} from '@material-ui/core/styles';

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

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 120,
  }
}))

const names = [
  'Oliver Hansen',
  'Van Henry'
]

const MainParam = () => {
  const [personName, setPersonName] = useState('')
  
  const theme = useTheme()
  const classes = useStyles()

  const handleChange = (event) => {
    setPersonName(event.target.value);
  }

  return (
    // <FormControl className={classes.formControl}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Name</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={personName}
        onChange={handleChange}
        input={<Input />}
        MenuProps={MenuProps}
      >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default MainParam
