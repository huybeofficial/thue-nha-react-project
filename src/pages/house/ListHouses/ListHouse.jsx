
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import HouseCard from './HouseCard/HouseCard'


function ListHouse(props) {
  const { columns } = props
  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: "100%",
      minHeight: '90dvh',
      my: 2,
      "&::-webkit-scrollbar-track": { m: 2 }
    }}>
      <Box>
        <Typography component={'div'} variant='h6' sx={{ textAlign:'center' }}>
          Khu vực Ba Đình
        </Typography>
        <Grid sx={{ p: 1, justifyContent: 'center' }} container rowSpacing={2} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
          <Grid item sm={6} xs={12}>
            <HouseCard />
          </Grid>
          <Grid item sm={6} xs={12}>
            <HouseCard />
          </Grid>
          <Grid item sm={6} xs={12}>
            <HouseCard />
          </Grid>
          <Grid item sm={6} xs={12}>
            <HouseCard />
          </Grid>
          <Grid item sm={6} xs={12}>
            <HouseCard />
          </Grid>
          <Grid item sm={6} xs={12}>
            <HouseCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ListHouse