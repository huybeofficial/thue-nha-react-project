import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function HouseCard() {
  return (
    <Card sx={{}}>
      <CardMedia
        sx={{ minHeight: 160 }}
        image="https://bds50.giaodienwebmau.com/wp-content/uploads/2021/07/The-Grand-Mahattan-can-ho-mau-5_1555820433.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography fontWeight={500} component="div">
          Chính chủ cho thuê nhà 5 tầng đối diện Vincom - Cạnh KFC - đỗ xe thoải mái - 100m2 - mặt tiền 10m
        </Typography>
        <Typography variant="h6" color='secondary' component="div">
          5 triệu/tháng - 2 ngủ - 1  tắm
        </Typography>
        <Typography gutterBottom color={'gray'} component="div">
          <LocationOnIcon fontSize='small' /> Ba Đình, Hà Nội
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Chính chủ tôi vừa khai trương 1 tòa nhà mới tinh ở quận Ba Đình 2 gần bến xe Mỹ Đình, quận Nam Từ Liêm thành phố Hà Nội.
           Tòa nhà được thiết kế 7 tầng thang máy tốc độ cao, các căn hộ 1 ngủ 1 bếp với diện tích 28m² và có full nội thất, đều được thiết kế đầy đủ ánh sáng và có ban công thoát hiểm.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}