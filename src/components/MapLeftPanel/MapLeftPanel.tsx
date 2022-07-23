import React from 'react';
import './styles.css';

interface IPanelProps {
    panelStatus : boolean
    children : React.ReactNode
    switchPanel : (panelStatus:boolean) => void
}

const MapLeftPanel: React.FC<IPanelProps>=(props) =>{
    const {panelStatus, children, switchPanel} = props;
 
        return (
            <div className={`map-left-panel ${panelStatus}`}>
            <div className="map-left-panel-button" onClick={() => switchPanel(!panelStatus)}>
              <div className={`panel-icon ${ panelStatus ? 'icon-left' : 'icon-right'} `} />
            </div>
            {children}
          </div>
        )
    
        }

export default MapLeftPanel;
