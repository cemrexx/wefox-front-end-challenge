import { useState } from 'react';
import axios from 'axios';
import { TFormData } from "../types/types";
const { REACT_APP_API_ENDPOINT } = process.env;

 type TCreateData = Omit<TFormData, 'id'>; 
const useCreatePost = () => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const postData = async ( json: TCreateData) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${REACT_APP_API_ENDPOINT}`, json);
            setResponse(response.data);

        } catch (err) {
            console.log('error');
            setResponse([]);
        } finally {
            setIsLoading(false);
        }
    }
    
    return {response, postData };
}

export default useCreatePost;