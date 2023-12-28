"use client"

import React, {useEffect} from "react";
import {Loader} from "@googlemaps/js-api-loader";

const MapCard = ({location}) => {

  const mapRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({apiKey: process.env.NEXT_PUBLIC_API_KEY, version: 'weekly'});

      const { Map } = await loader.importLibrary('maps');

      const map = new Map(mapRef.current, {
        center: {
          lat: location.lat,
          lng: location.lng
        },
        zoom: 17,
        mapId: 'MY_MAP_ID'
      })

    }

    initMap();
  })

  return (
      <div className="mapCard" ref={mapRef}></div>
  )
}

export default MapCard;