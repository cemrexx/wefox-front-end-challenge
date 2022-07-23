import { useState } from 'react';
import axios from 'axios';
const { REACT_APP_API_ENDPOINT } = process.env;

const useFetchList = () => {
    const [data, setData] = useState([]);
    const removeData = async( id:number) => {
        if(!id) return;
        try {
            const response = await axios.delete( `${REACT_APP_API_ENDPOINT}/${id}`)
            setData(response.data);
        } catch (err) {
          
                console.log('error');
                setData([]);
           
        } 
    }
  
    


    return {  removeData };
}

export default useFetchList;