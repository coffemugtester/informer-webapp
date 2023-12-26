import Image from 'next/image'
import styles from './page.module.css'
import {mockData} from "./utils";
import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: process.env.API_KEY,
  version: "weekly",
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

export default async function Home() {

  let dataObject;

  if (process.env.IS_MOCK_DATA) {
    console.log(`isMockData: ${process.env.IS_MOCK_DATA}`)
    dataObject = mockData
    console.log('the mock data:', dataObject)
  } else {
    const response = await fetch('https://informer-production.up.railway.app/item')
    const dataObject = await response.json()
    console.log(dataObject)
  }

  return (
      <div className="grid-container">
        <div className="container-a" style={{
          display: 'grid',
          placeItems: 'center',
          height: '100%'  // Or any specific height as needed
        }}>
          <h1 style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '2rem' }}>Informer</h1>
        </div>
        <div className="container-b" style={{
          display: 'grid',
          placeItems: 'center',
          height: '100%'  // Or any specific height as needed
        }}>
          <h1 style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '2rem' }}>Rating: {dataObject.result.rating} - N°Reviews: {dataObject.result.user_ratings_total}</h1>
        </div>
        <div className="container-c"></div>
        <div className="container-d"></div>
        <div className="container-e"></div>
        <div className="container-f"></div>
      </div>
  )
}
