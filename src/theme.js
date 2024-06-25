import { cyan, deepOrange, red, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = "50px"
const BOARD_CONTENT_HEIGHT = `calc(100dvh - ${APP_BAR_HEIGHT})`
// Create a theme instance.
const theme = extendTheme({
  app: {
    appBarHeight: APP_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    }
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: red
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  }
  // ...other properties
})

export default theme
