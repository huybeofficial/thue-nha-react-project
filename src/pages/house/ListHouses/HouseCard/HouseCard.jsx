import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Grid from '@mui/material/Grid'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import Link from '@mui/material/Link'

export default function HouseCard() {

  const [isSave, setIsSave] = useState(false)
  const handleSave = () => {
    setIsSave(!isSave)
  }

  return (
    <Card>
      <CardContent sx={{ p: 1 }}>
        <Typography gutterBottom fontWeight={500} component="div">
          Phòng tầng 2 khu tập thể Kim Mã
        </Typography>
        <Grid container columnSpacing={{ xs: 1, md: 3 }}>
          <Grid item xs={4} md={5}>
            <CardMedia
              sx={{ minHeight: 100, maxHeight: 130, width: "100%", borderRadius: 0.5 }}
              image="https://bds50.giaodienwebmau.com/wp-content/uploads/2021/07/The-Grand-Mahattan-can-ho-mau-5_1555820433.jpg"
              title="green iguana"
            />
          </Grid>
          <Grid item xs={8} md={7}
            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <Typography variant="body2" color="text.secondary" sx={{ width: '50%' }}>
              - Điện: 4k
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ width: '50%' }}>
              - Nước: 50k
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ width: '50%' }}>
              - Diện tích: 23 m²
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ width: '50%' }}>
              - Gửi xe miễn phí
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ width: '50%' }}>
              - Máy giặt
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ width: '50%' }}>
              - Wifi
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ width: '50%' }}>
              - Vệ sinh hàng tuần
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'space-between',
          '.MuiSvgIcon-root': {
            color: '#b71c1c'

          }
        }}>
          <Typography sx={{ display: 'flex', alignItems:'center', gap: 0.5 }} component="span">
            <LocationOnIcon fontSize='small' /> Ba Đình, Hà Nội
          </Typography>
          <Box>
            <Typography sx={{ display: 'flex', alignItems:'center', gap: 0.5 }} component="span">
              <PersonOutlineIcon fontSize='small' /> Quang Huy
            </Typography>
            <a
              href={`tel:0886889102`}
              style={{
                display: 'flex',
                textDecoration: 'none',
                alignItems: 'center',
                letterSpacing: 1,
                gap: 0.5,
                cursor: 'pointer',
                color: 'unset'
              }}
            >
              <PhoneEnabledIcon fontSize='small' /> 0886 889 102
            </a>
          </Box>
        </Box>
      </CardContent>
      {isSave ?
        <Button onClick={handleSave} size="small">
          <FavoriteIcon />
          Bỏ lưu
        </Button>
        :
        <Button onClick={handleSave} size="small">
          <FavoriteBorderIcon />
          Lưu tin
        </Button>}
    </Card>
  )
}