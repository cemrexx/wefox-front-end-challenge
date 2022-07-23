import Map from "ol/Map";

export interface IMapType {
  map: Map;
}

export interface IPostsProps {
  data: {
    id: number; 
    content: string;
    lat : string;
    long : string;
    title: string;
  }[]
}


