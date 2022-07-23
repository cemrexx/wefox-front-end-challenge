import { useState } from 'react';
import axios from 'axios';
const { REACT_APP_API_ENDPOINT } = process.env;
type Posts ={
        id: number; 
        content: string;
        image_url: string;
        title: string;
}

const useShowPost = () => {
    const [postData, setPostData] = useState<Posts>();

    const show = async (id:number) => {
        try {
            const response = await axios.get(`${REACT_APP_API_ENDPOINT}/${id}`);
            setPostData(response.data);
    
        } catch (err) {
            console.log('error');
            
            
        }
    }

  

    return { postData,  show };
}

export default useShowPost;