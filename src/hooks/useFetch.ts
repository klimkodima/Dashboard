import { useState, useEffect } from "react";

import { apiBaseUrl } from '../constants';
import { Currency, ColaOrderFromApi } from "../types";

type JSONresponse = {
    data?: Currency | ColaOrderFromApi
}

const useFetch = (querry: string | null) => {

    const [data, setData] = useState<any>();

    const fetchNow = async (querry: string) => {
        try {
            let response = await fetch(apiBaseUrl + querry);
            const data: JSONresponse = await response.json();
            setData(data);
        } catch (error) {
            console.log(error);
        };
    }

    useEffect(() => {
        if (querry) {
            fetchNow(querry);
        }
    }, [querry]);

    return [data, fetchNow];
}

export default useFetch