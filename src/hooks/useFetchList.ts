import { useState, useEffect } from 'react';
import axios from 'axios';
const { REACT_APP_API_ENDPOINT } = process.env;

const useFetchList = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            
            const response = await axios.get(`${REACT_APP_API_ENDPOINT}`);
            setData(response.data);
        } catch (err) {
            console.log('error');
            setData([]);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading , refresh:fetchData};
}

export default useFetchList;