import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarCard = ({car}) => {
    const imagesUrl = "https://localhost:7220/images/";

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Card sx={{maxWidth: 345, height: "100%"}}>
            <Slider {...settings}>
                {car.images.map((img, index) => (
                    <div key={index}>
                        <img alt={car.model} height="300px" src={imagesUrl + img}/>
                    </div>
                ))}
            </Slider>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {car.brand} {car.model} {car.year}
                </Typography>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    Ціна: {car.price} $
                </Typography>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    Коробка: {car.gearbox}
                </Typography>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    Колір: {car.color}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CarCard;