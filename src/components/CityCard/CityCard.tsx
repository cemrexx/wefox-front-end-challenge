import React , {FunctionComponent} from 'react';
import './styles.css';

interface IPostsProps {
    data: {
        id: number; 
        content: string;
        image_url: string;
        title: string;
    }
}
const CityCard: FunctionComponent<IPostsProps> = (props) =>{
    const {id, content, image_url, title} = props.data;
        return (
            <>
            <div className="card-title">{title}</div>
            <div className="card-body">
           
            <img alt={title} className="card-image" src={image_url} />
           
            <div className="card-content">
                <p>{content}</p>
            </div>
            </div>

            </>
          );
  
}

export default CityCard;