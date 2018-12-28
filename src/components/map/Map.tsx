import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

import s from './Map.scss';


export interface IPoint {
  lat: number;
  lng: number;
}

interface IProps {
  center: IPoint;
  zoom: number;
}

export default function Map({ center, zoom }: IProps) {

  return (
    <div className={s.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyAUj4I-B6VHioidgXvPCseu-BzIVVkbezQ',
          language: 'is',
          region: 'is',
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
          text={'Rafport'}
        />
      </GoogleMapReact>
    </div>
  );
}
