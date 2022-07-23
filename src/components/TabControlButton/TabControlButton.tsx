import React , {FunctionComponent}  from 'react';
import './styles.css';

interface ITabButtonProps  {
    label: string;
    selected: boolean;
    onClick: () => void;

}
const TabControlButton: FunctionComponent<ITabButtonProps> = (props) =>{
    const {onClick , label , selected } = props;
        return (
            <div className={`tab-control-button ${selected && 'selected'}`} onClick={onClick} >
                 <div> {label} </div>
            </div>
          );
  
}

export default TabControlButton;
