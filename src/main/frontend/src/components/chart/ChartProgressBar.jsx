import React from 'react'
import { 
  makeStyles,
 } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { 
Typography,
Collapse
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  containerStyles: {
    height: 50,
    // backgroundColor: '#f2f2f2',
    position: 'relative',
  },
  badFilterStyle: props => ({
    height: '100%',
    width: `${props.bad}%`,
    // backgroundColor: '#990F02',
    borderRadius: 'inherit',
    float: 'left',
    transition: 'width 1s ease-in-out',
  }),
  normalFilterStyle: props => ({
    height: '100%',
    width: `${props.normal}%`,
    // backgroundColor: '	#F8DE7E',
    borderRadius: 'inherit',
    float: 'left',
    transition: 'width 1s ease-in-out',
  }),
  goodFilterStyle: props => ({
    height: '100%',
    width: `${props.good}%`,
    // backgroundColor: '#008000',
    borderRadius: 'inherit',
    float: 'left',
    transition: 'width 1s ease-in-out',
  }),
  testPercentStyles: {
    height: 6,
    
  },
  labelStyles: {
    fontSize: 18,
    padding: 8,
    position: 'absolute',
    right: '0%',
  },
  typographyStyle: {
    minWidth: '45px'
  }
}))

const ChartProgressBar = (props) => {
  const { bad, normal, good, hover } = props
  const classes = useStyles(props)

  return (
    <div className={classes.containerStyles}>
      <div className={classes.badFilterStyle}>
        <Collapse in={hover} collapsedHeight={28}>
          <Typography
            variant='h4'
            align='center'
            color='textSecondary'
            className={classes.typographyStyle}
          >
            <b>{bad}</b>%
          </Typography>
        </Collapse>
        <div
          className={classes.testPercentStyles}
          style={{
            // backgroundColor: '#990F02',
            backgroundImage: 'linear-gradient(#d53e33, #d53e33)'
          }}></div>
      </div>
      <div className={classes.normalFilterStyle}>
        <Collapse in={hover} collapsedHeight={28}>
          <Typography
            variant='h4'
            align='center'
            color='textSecondary'
            className={classes.typographyStyle}
          >
            <b>{normal}</b>%
          </Typography>
        </Collapse>
        <div
          className={classes.testPercentStyles}
          style={{
            // backgroundColor: '#F8DE7E',
            backgroundImage: 'linear-gradient(#fbb300, #fbb300)'
          }}></div>
      </div>
      {
        good > 0 &&
        <div className={classes.goodFilterStyle}>
        <Collapse in={hover} collapsedHeight={28}>
            <Typography
              variant='h4'
              align='center'
              color='textSecondary'
              className={classes.typographyStyle}
            >
              <b>{good}</b>%
            </Typography>
          </Collapse>
          <div
            className={classes.testPercentStyles}
            style={{
              // backgroundColor: '#008000',
              backgroundImage: 'linear-gradient(#399953, #399953)'
            }} />
          </div>
      }

    </div>
  )
}

ChartProgressBar.propTypes = {
  status: PropTypes.string.isRequired,
  bad: PropTypes.number.isRequired,
  normal: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  hover: PropTypes.bool
}

ChartProgressBar.defaultProps = {
  status: '',
  bad: 0,
  normal: 0,
  good: 0,
  hover: false
}

export default ChartProgressBar