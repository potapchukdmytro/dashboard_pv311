import CarCard from "../../components/cards/CarCard";
import Grid from "@mui/material/Grid2";
import {useEffect, useState} from "react";
import axios from "axios";

const CarsPage = () => {
    const [cars, setCars] = useState([]);

    const apiUrl = "https://localhost:7220/api/car/list";

    const fetchCars = async () => {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
            const data = response.data;
            setCars(data.payload);
        }
    }

    useEffect(() => {
        fetchCars()
            .catch(error => console.log(error));
    }, [])

    return (
        <Grid container spacing={2} sx={{mt: 2}}>
            {
                cars.map((car) => (
                    <Grid key={car.id} size={4}>
                        <CarCard car={car}/>
                    </Grid>
                ))}
        </Grid>
    )
}

export default CarsPage;