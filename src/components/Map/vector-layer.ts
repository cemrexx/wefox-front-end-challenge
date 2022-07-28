import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import { IPostsProps } from './map-types';
import * as olProj from 'ol/proj';


const defineVectorLayer = (data: IPostsProps) => {
  const features: Feature<Point>[] = [];
  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png',

    }),
  });
  data.data.map((val: any) => {
    const iconFeature = new Feature({
      geometry: new Point(olProj.fromLonLat([val.long, val.lat])),
      id: val.id,
      name: val.title,
    });
    iconFeature.setStyle(iconStyle);
    features.push(iconFeature);
  })
  const vectorSource = new VectorSource({
    features: features,
  });
  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  return vectorLayer

}

export default defineVectorLayer;