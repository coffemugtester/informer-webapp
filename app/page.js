import Image from 'next/image'
import styles from './page.module.css'
import {mockData} from "./utils";

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
        <div className="container-a"></div>
        <div className="container-b"></div>
        <div className="container-c"></div>
        <div className="container-d"></div>
        <div className="container-e"></div>
        <div className="container-f"></div>
      </div>
  )
}
