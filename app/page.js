import styles from './page.module.css'
import {mockData} from "./utils";
import {PageName} from "../components/PageName";
import {RatingAndReviewsCount} from "../components/RatingAndReviewsCount";
import {MapCard} from "../components/MapCard";
import {Rankings} from "../components/Rankings";
import {MainCard} from "../components/MainCard";


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
        <MainCard dataObject={dataObject}/>
        {/*<MapCard coordinates={dataObject.result.geometry.location}/>*/}
        <Rankings/>
      </div>
  )
}
