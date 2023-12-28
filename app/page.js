import styles from './page.module.css'
import {mockData} from "./utils";
import {
  MainCard, MapCard,
  PageName, Rankings,
  RatingAndReviewsCount,
  WorkingHoursCard
} from "../components";

export default async function Home() {

  const {embassyData, err} = await getEmbassyData(process.env.IS_MOCK_DATA === 'true')
  if (err) {
    console.log('Error getting the data')
    return <div>ERROR</div>
  }

  return (
      <>
        <PageName/>
        <RatingAndReviewsCount
            userRatingsTotal={embassyData.result.user_ratings_total}
            rating={embassyData.result.rating}
        />
        <WorkingHoursCard periods={embassyData.result.opening_hours.periods}/>
        <MainCard
            formattedAddress={embassyData.result.formatted_address}
            rating={embassyData.result.rating}
        />
        {/*<MapCard location={embassyData.result.geometry.location}/>*/}
        <Rankings/>
      </>
  )
}

async function getEmbassyData(useMockData) {

  if (useMockData) {
    return {embassyData: mockData, err: null}
  } else {
    try {
      const response = await fetch('https://informer-production.up.railway.app/item')
      const embassyData = await response.json()
      //if (response.headers.get('content-type') === 'application/json') { embassyData = response.json()}
      if (response.ok) {
        console.log(`isMockData: ${useMockData} -`, embassyData)
        return {embassyData, err: null}
      } else {
        console.log('ERROR - API returned error code', response.statusCode, response.url)
        return {data: null, err: true}
      }
    } catch (err) {
      console.log('ERROR - failed to fetch', err)
      return {data: null, err: true}
    }
  }
}