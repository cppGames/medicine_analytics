import { createMuiTheme }  from '@material-ui/core/styles'


// check it 
// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
// https://v3.material-ui.com/customization/themes/

const theme = createMuiTheme({
  spacing: 8,
  cardMaterial: {
    minWidth: 275,
    background: 'transparent',
    boxShadow: '6px 6px 14px 0 rgba(0, 0, 0, 0.2), -8px -8px 18px 0 rgba(255, 255, 255, 0.55)',
  },
  page: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    minHeight: '100vh',
  },
  palette: {
    background: {
      default: '#FFFFFF'
    },
    primary: {
      main: '#363537',
    },
  },
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
    grey: '#778077',
    gradient: '#4ebfd1',
    // 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
})

export default theme
