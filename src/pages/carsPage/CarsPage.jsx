import CarCard from "../../components/cards/CarCard";
import Grid from "@mui/material/Grid2";
import {useEffect, useState} from "react";
import axios from "axios";
import {Pagination, Box} from "@mui/material";

const CarsPage = () => {
    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 3,
        pageCount: 1
    });
    const [cars, setCars] = useState([]);

    const changePageHandler = (event, value) => {
        setPagination({...pagination, page: value});
    }

    const fetchCars = async () => {
        const apiUrl = `https://localhost:7220/api/car/list?page=${pagination.page}&pageSize=${pagination.pageSize}`;
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
            const data = response.data;
            setCars(data.payload.cars);
            setPagination({...pagination, page: data.payload.page, pageCount: data.payload.pageCount});
        }
    }

    useEffect(() => {
        fetchCars()
            .catch(error => console.log(error));
    }, [pagination.page])

    return (
        <>
        <Grid container spacing={2} sx={{mt: 2}}>
            {
                cars.map((car) => (
                    <Grid key={car.id} size={4}>
                        <CarCard car={car}/>
                    </Grid>
                ))}

        </Grid>
        <Box display="flex" mt={2} justifyContent="center">
            <Pagination page={pagination.page} onChange={changePageHandler} count={pagination.pageCount}/>
        </Box>
        </>
    )
}

export default CarsPage;