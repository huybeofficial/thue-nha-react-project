import Box from '@mui/material/Box'
import SwipeableTemporaryDrawer from '~/components/SideBar/SideBar'
import ListHouse from '../house/ListHouses/ListHouse'
import ScrollTop from '~/components/ScrollTop/ScrollTop'
import Container from '@mui/material/Container'

function Home() {
  return (
    <Container
      sx={{
        padding: '0 !important',
        overflowY: 'auto',
        width: '100%',
        bgcolor: (theme) => (theme.palette.mode === 'light' ? "#F9F9F9" : "#0F1214"),
      }}>

      <ScrollTop />
      <SwipeableTemporaryDrawer />
      <ListHouse />
    </Container>
  )
}

export default Home