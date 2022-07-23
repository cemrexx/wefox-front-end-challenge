import { useState} from 'react';
import axios from 'axios';
import { TFormData } from "../types/types";
const { REACT_APP_API_ENDPOINT } = process.env;

export type TUpdateData = Omit<TFormData, 'id'>; 
 const useUpdatePost = () => {
  const [updatedData, setUpdatedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const update = async (json: TUpdateData , id:number) => {
    setLoading(true);
    try {
        const response = await axios.put(`${REACT_APP_API_ENDPOINT}/${id}`, json);
        setUpdatedData(response.data);

    } catch (err) {
        console.log('error');
        setUpdatedData([]);
    } finally {
        setLoading(false);
    }
}

  return { updatedData, loading,  update };
};

export default useUpdatePost;
