// react
import React, { useState, useEffect, useRef } from 'react';
import { MapBrowserEvent , Map} from "ol";

import MapLeftPanel from '../MapLeftPanel';
import useShowPost from '../../hooks/useShowPost';
import CityCard from '../CityCard'
import {IMapType , IPostsProps} from './map-types';
import {getOlmap} from './olmapUtil'
import defineVectorLayer from './vector-layer';
import './styles.css';


const MapWrapper = ({data}:IPostsProps ) =>{

  // set intial state
  const [ map, setMap ] = useState<any>()
  //open layer map no type definition for map object
  const [cursor, setCursor] = useState('default');
  const [panelStatus , setPanelStatus] = useState<boolean>(false);
  const {postData, show } = useShowPost();

  useEffect( () => {
    // create map
    const initialMap = getOlmap(4,25);
    initialMap.setTarget('map');
    setMap(initialMap)

  },[])
  useEffect( () => {
   if(postData){
    setPanelStatus(true);
   }

  },[postData])

  useEffect( () => {
    if(!map) return
    map.on('click', function (evt:MapBrowserEvent<any>) {
      const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature:any) {
        return feature;
      });
      if (feature) {
        console.log({feature});
        const id = feature.get('id');
        show(id);
      } 
    });
    map.on('pointermove', function(e:any) {
      if (e.dragging) return;
      var pixel = map.getEventPixel(e.originalEvent),
          hit = map.hasFeatureAtPixel(pixel);
          setCursor(hit ? 'pointer' : 'default');
  });
  },[map])

  useEffect(() => {
    if(!map) return;
    if (data.length > 0) {
      const vectorLayer = defineVectorLayer({data});
      map.addLayer(vectorLayer);
    }
  },[map ,data])

  return (     
    <>
    <div className="info-box">
      <span className='info-icon'>&#8505;</span>
      <span>Click on the marker for city details</span>
    </div>
    <div style={{
      position: 'relative', height: 'calc(100% - 30px)', width: '100%', cursor: `${cursor}`,
    }}>
      
      <div className="map-container" id="map"></div>
     <MapLeftPanel panelStatus = {panelStatus} switchPanel= {()=>setPanelStatus(!panelStatus)}>
      {postData && <CityCard data={postData}></CityCard>}
      </MapLeftPanel>
    </div>
    </> 
  ) 

}

export default MapWrapper