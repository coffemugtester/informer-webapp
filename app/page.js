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
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-4">
          {/* Text Block */}
          <div className="p-4 border rounded shadow-sm">
            <p className="text-gray-700">Some text content...</p>
            <p className="text-gray-700">Rating: {dataObject.result.rating}</p>
          </div>

          {/* Ratings Block */}
          <div className="p-4 border rounded shadow-sm">
            <p className="text-gray-700">Text (ratings)</p>
          </div>

          {/* Photos Block */}
          <div className="p-4 border rounded shadow-sm">
            <div className="w-full h-64 bg-gray-200 flex justify-center items-center">
              <span>Picture (Photos)</span>
            </div>
          </div>

          {/* Working Hours Comparison Block */}
          <div className="p-4 border rounded shadow-sm">
            <p className="text-gray-700">Working hours: comparison</p>
          </div>

          {/* Google Maps Embed Block */}
          <div className="p-4 border rounded shadow-sm">
            {/* Replace `src` with the actual Google Maps embed link */}
            <iframe
                title="Google Map"
                className="w-full h-64"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18..."
                allowFullScreen
            ></iframe>
          </div>

          {/* Metrics Block */}
          <div className="p-4 border rounded shadow-sm">
            <p className="text-gray-700">Metrics</p>
          </div>
        </div>
      </div>
  )
}
