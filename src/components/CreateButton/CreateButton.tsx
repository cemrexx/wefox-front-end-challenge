import React , {FunctionComponent}from 'react';
import './styles.css';

interface IButtonProps {
    onClick: () => void;
  }

const CreateButton: FunctionComponent<IButtonProps>=(props) =>{
    const {onClick} = props;
    return (
        <div className="create-button" onClick={onClick}>
                 Add new Post
        </div>
    );
}

export default CreateButton;