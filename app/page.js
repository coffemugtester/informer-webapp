import styles from './page.module.css'
import {mockData} from "./utils";
import {PageName} from "../components/PageName";
import {RatingAndReviewsCount} from "../components/RatingAndReviewsCount";
import {MapCard} from "../components/MapCard";
import {Rankings} from "../components/Rankings";


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
        <PageName/>
        <RatingAndReviewsCount dataObject={dataObject}/>
        <div className="container-c" style={{
          display: 'grid',
          placeItems: 'center',
          height: '100%'  // Or any specific height as needed
        }}>
          <ul>
            {dataObject.result.opening_hours.periods.map((period)=>{
              return <li key={period.close.day}>{period.close.day}: open at period {period.open.time} & closed {period.close.time}</li>
            })}
          </ul>
        </div>
        <div className="container-d">
          <div className='container-da' style={{
            display: 'grid',
            placeItems: 'center',
            height: '100%'  // Or any specific height as needed
          }}>
            <h2 style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '1.5rem' }}>{dataObject.result.formatted_address}</h2>
          </div>
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
        <MapCard coordinates={dataObject.result.geometry.location} />
        <Rankings/>
      </div>
  )
}
