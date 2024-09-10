import { useState } from "react";
import flightSearch from "../apis/flightSearch";

const useApi = ({ apiFunction }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async () => {

        try {

            const response = await flightSearch.getAirports


            // if (!response.ok) return setError(true);

            setError(false);
            setData(response);
        } catch {
            setData([{ label: "Hartsfield-Jackson Atlanta International Airport", value: "ATL" }])
        }

    };

    console.log(data);

    return { data, error, request };
};

export default useApi;
