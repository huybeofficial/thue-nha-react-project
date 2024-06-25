import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AppBarComponent from '../AppBar/AppBar'
import HomeIcon from '@mui/icons-material/Home'
import ModeSelect from '../ModeSelect/ModeSelect'

export default function SwipeableTemporaryDrawer(props) {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const listSideBar = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={() => setOpen(false)}
    >
      <List>
        <ListItem onClick={() => console.log("1111")} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Trang chủ"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem onClick={() => console.log("1111")} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Tìm thuê nhà"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ModeSelect />
      </List>
    </Box>
  )

  return (
    <div>

      <React.Fragment>
        <SwipeableDrawer
          anchor={'left'}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          {listSideBar()}
        </SwipeableDrawer>
      </React.Fragment>
      <AppBarComponent _toggleDrawer={toggleDrawer} />

    </div>
  )
}