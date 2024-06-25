import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import PropTypes from 'prop-types'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'


function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

function AppBarComponent(props) {
  const { _toggleDrawer } = props
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.app.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1
    }}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon onClick={_toggleDrawer }/>
            </IconButton>
            <Typography
              noWrap
              component="span"
              sx={{ flexGrow: 1, display: 'block' }}
            >
              Thuê nhà LOGO
            </Typography>
            <TextField
              id="outlined-search"
              value={searchValue}
              placeholder='Tìm kiếm...'
              onChange={(e) => setSearchValue(e.target.value)}
              size='small'
              type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'white' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  searchValue &&
                  <CloseIcon sx={{ color: 'white', cursor: 'pointer' }} fontSize='small'
                    onClick={() => setSearchValue('')} />
                )
              }}
              sx={{
                minWidth: 100,
                maxWidth: 170,
                '& label': { color: 'white' },
                '& input': { color: 'white' },
                '& label.Mui-focused': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                }
              }}

            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  )
}

export default AppBarComponent
