import Image from 'next/image'
import styles from './page.module.css'
import {mockData} from "./utils";
import { Loader } from "@googlemaps/js-api-loader"
import {PageName} from "../components/PageName";
import {RatingAndReviewsCount} from "../components/RatingAndReviewsCount";
import {MapCard} from "../components/MapCard";
import {Rankings} from "../components/Rankings";


export default async function Home() {

  let dataObject;

  let keyStr;

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
        <PageName/>
        <RatingAndReviewsCount dataObject={dataObject}/>
        <div className="container-c"></div>
        <div className="container-d">
          <div className="container-db">
            <img
              src='/berlin.jpg'
              height='1020'
              width='1327'
              alt='berlin'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // This makes the image cover the full area of the div
                objectPosition: 'center' // Adjust the alignment of the image
              }}
            />
          </div>
        </div>
        {/*<MapCard coordinates={dataObject.result.geometry.location} />*/}
        <Rankings/>
      </div>
  )
}
