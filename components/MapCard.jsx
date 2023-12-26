"use client"

import React, {useEffect} from "react";
import {Loader} from "@googlemaps/js-api-loader";

export const MapCard = ({coordinates}) => {

  const mapRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {
      console.log('map init')
      console.log(process.env.API_KEY)
      const loader = new Loader({apiKey: process.env.NEXT_PUBLIC_API_KEY, version: 'weekly'});

      const { Map } = await loader.importLibrary('maps');

      //set up the map
      const map = new Map(mapRef.current, {
        center: {
          lat: coordinates.lat,
          lng: coordinates.lng
        },
        zoom: 17,
        mapId: 'MY_MAP_ID'
      })

    }

    initMap();
  }, [])

  return (
      <div className="container-e" ref={mapRef}></div>
  )
}