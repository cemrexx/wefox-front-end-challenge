import OlMap from 'ol/Map';
import OlView from 'ol/View';
import { transform } from 'ol/proj';
import { defaults } from 'ol/control';
import OldbClickZoomInteraction from 'ol/interaction/DoubleClickZoom';
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OlXYZ from 'ol/source/XYZ';


const getOlmap = (zoom:number, maxZoom:number) => {

  const initalFeaturesLayer = new VectorLayer({
    source: new VectorSource()
  })
  const baseLayer =new TileLayer({
      source: new OlXYZ({
         url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga', 
      }),
    });
    const olmap = new OlMap({
      view: new OlView({
        center: transform([11, 48], 'EPSG:4326', 'EPSG:3857'),
        zoom,
        maxZoom,

      }),
      layers: [
        baseLayer
        // new TileLayer({
        //   source: new OlXYZ({
        //      url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga',
           
        //   }),
        // }),
        , initalFeaturesLayer
        
      ],
      controls: defaults({ attribution: false, rotate: false, zoom: true }),
    });
    olmap.getInteractions().getArray()
      .forEach((interaction) => {
        if (interaction instanceof OldbClickZoomInteraction) {
          olmap.removeInteraction(interaction);
        }
      });
    return olmap;
  }

export  {
    getOlmap
}     