import axios from "axios";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";

const ManufacturesPage = () => {
    const [manufacture, setManufacture] = useState(null);

    const apiImagesUrl = "https://localhost:7220/images/";

    const fetchManufacture = async () => {
        const response = await axios.get("https://localhost:7220/api/manufacture?id=2737e761-e4ab-4032-8813-b78082301774");
        if (response.status === 200) {
            const data = response.data;
            setManufacture(data);
        }
    }

    useEffect(() => {
        fetchManufacture();
    }, []);

    return (
        <>
            {
                manufacture != null ? (
                    <div>
                        <div>
                            <img width="400px" src={`${apiImagesUrl}${manufacture?.image}`} alt=""/>
                        </div>
                        <h1>{manufacture?.name}</h1>
                        <h2>{manufacture?.founder}</h2>
                        <h2>{manufacture?.director}</h2>
                        <h3>{manufacture?.description}</h3>
                    </div>
                ) : <CircularProgress/>
            }
        </>
    )
}

export default ManufacturesPage;