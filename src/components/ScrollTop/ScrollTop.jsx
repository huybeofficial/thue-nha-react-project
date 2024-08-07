import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Fade from '@mui/material/Fade'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function ScrollTop(props) {
  const { window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).documentElement

    if (anchor) {
      anchor.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 16,
          p: 0.5,
          backgroundColor: "#cbcbcb",
          borderRadius: 1,
          alignItems: 'center',
          display: 'flex',
          cursor: 'pointer'
        }}
      >
        <KeyboardArrowUpIcon />
      </Box>
    </Fade>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default ScrollTop