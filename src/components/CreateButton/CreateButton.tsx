import React , {FunctionComponent}from 'react';
import './styles.css';

interface IButtonProps {
    onClick: () => void;
  }

const CreateButton: FunctionComponent<IButtonProps>=(props) =>{
    const {onClick} = props;
    return (
        <div className="create-button">
             <button onClick={onClick} type="button">
                 Add new Post
            
            </button>
        </div>
    );
}

export default CreateButton;