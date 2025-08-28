'use client';
import { useEffect, useState } from "react";

const api = process.env.openWeatherApi

type City = {
    id:number;
    nama:string;
}

type WeatherData = {
    nama: string;
    main: {
        temp: number;
        humidity: number;

    };
    weather: {main: string; description: string}[];
};




export default function WeatherList() {
  const [data, setData] = useState<any[]>([]);
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

  async function fetchWeather() {
    try {
      const res = await fetch("/maps.json"); // pastikan ada di public/maps.json
      const json = await res.json();

      const cities: City[] = json.wilayah;

      const responses = await Promise.all(
        cities.map((city) =>
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.nama}&appid=${API_KEY}&units=metric&lang=id`
          ).then((res) => res.json())
        )
      );

      setData(responses);
    } catch (err) {
      console.error("Error fetch weather:", err);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);
  return(
    
  )
}