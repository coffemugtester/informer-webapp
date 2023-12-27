import styles from './page.module.css'
import {mockData} from "./utils";
import {PageName} from "../components/PageName";
import {RatingAndReviewsCount} from "../components/RatingAndReviewsCount";
import {MapCard} from "../components/MapCard";
import {Rankings} from "../components/Rankings";
import {MainCard} from "../components/MainCard";
import {WorkingHoursCard} from "../components/WorkingHoursCard";

export default async function Home() {
  //TODO: fix variables' names
  let embassyData;

  //TODO: wrap this conditionals in functions in a utils.js
  if (process.env.IS_MOCK_DATA) {
    console.log(`isMockData: ${process.env.IS_MOCK_DATA}`)
    embassyData = mockData
    console.log('the mock data:', embassyData)
  } else {
    const response = await fetch('https://informer-production.up.railway.app/item')
    const embassyData = await response.json()
    console.log(embassyData)
  }

  return (
      <>
        <PageName/>
        <RatingAndReviewsCount embassyData={embassyData}/>
        <WorkingHoursCard embassyData={embassyData}/>
        <MainCard embassyData={embassyData}/>
        {/*<MapCard coordinates={embassyData.result.geometry.location}/>*/}
        <Rankings/>
      </>
  )
}
