'use client';

import {useEffect} from "react";

export default function Home() {
  useEffect(() => {
    // Function to make the API request to /api/hello
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        console.log('API Response:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData().then(r => r);
  }, []); // The empty dependency array ensures the useEffect runs once on component mount

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  )
}
