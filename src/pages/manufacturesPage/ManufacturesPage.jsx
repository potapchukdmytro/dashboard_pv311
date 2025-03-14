import axios from "axios";
import {useEffect, useState} from "react";
import {Box, LinearProgress, Typography} from "@mui/material";

const ManufacturesPage = () => {
    const [manufactures, setManufactures] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiImagesUrl = "https://localhost:7220/images/";

    const fetchManufacture = async () => {
        setLoading(true);
        const response = await axios.get("https://localhost:7220/api/manufacture/list");
        if (response.status === 200) {
            const data = response.data;
            const list = data.payload;
            setManufactures(list);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchManufacture()
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            {
                loading ? <LinearProgress/>
                    : manufactures.map(item => (
                        <Box key={item.id}>
                            <Box>
                                <img width="400px" alt={item.name} src={`${apiImagesUrl}${item.image}`}/>
                            </Box>
                            <Box>
                                <Typography variant="h2">{item.name}</Typography>
                                <Typography variant="h4">Засновник: {item.founder}</Typography>
                                <Typography variant="h4">Директор: {item.director}</Typography>
                                <Typography variant="p">{item.description}</Typography>
                            </Box>
                        </Box>
                    ))
            }
        </>
    )
}

export default ManufacturesPage;