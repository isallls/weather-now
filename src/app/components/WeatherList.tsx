"use client";
import { useEffect, useState } from "react";

type City = {
  id: number;
  nama: string;
};

export default function WeatherList() {
  const [data, setData] = useState<any[]>([]);
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

  async function fetchWeather() {
    try {
      console.log("▶️ Mulai fetch maps.json...");

      const res = await fetch("/maps.json"); 
      const json = await res.json();
    //   console.log("✅ Data maps.json:", json);

      const cities: City[] = json.wilayah;
    //   console.log("📍 Daftar kota:", cities);

      const responses = await Promise.all(
        cities.map(async (city, idx) => {
        //   console.log(`🌍 Fetching weather untuk ${city.nama} (index: ${idx})...`);

          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.nama}&appid=${API_KEY}&units=metric&lang=ID`
          );

          const weather = await res.json();

          console.log(`✅ Hasil ${city.nama}:`, weather);

          return weather;
        })
      );

      console.log("🎉 Semua request selesai:", responses);

      setData(responses);
    } catch (err) {
      console.error("❌ Error fetch weather:", err);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 justify-center md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {data.map((cityWeather, idx) => (
                    <div className="w-56 m-3 shadow-2xl">
                <div className="h-48 w-full text-black bg-gradient-to-b from-sky-400 via-sky-200 to-yellow-100 rounded-t-2xl grid grid-cols-2">
                    <div className="p-3 mt-4">
                        <h1>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                            </svg> */}
                              <img
                                src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`}
                                alt={cityWeather.weather[0].description}
                                className="w-16 h-16 mx-auto mb-2 size-28" // ini styling tailwind
                            />
                        </h1>
                    </div>
                    <div className="p-3 mt-4 text-right">
                        <h1>{cityWeather.weather?.[0]?.description}</h1>
                        <h1>{cityWeather.main?.temp}°C</h1>
                        <h1>{cityWeather.name}, {cityWeather.sys?.country}</h1>
                    </div>
                </div>
                <div className=" h-32 w-full bg-white grid grid-cols-2">
                    <div className="text-gray-600 p-3 rounded-2xl">
                        <h1>Wind</h1>
                        <h1>Humidity</h1>
                        <h1>Preassure</h1>
                    </div>
                    <div className="text-right text-black p-3">
                        <h1>{cityWeather.wind?.speed}</h1>
                        <h1>{cityWeather.main?.humidity}</h1>
                        <h1>{cityWeather.main?.pressure}</h1>
                    </div>
                </div>
            </div>        
        // <div key={idx} className="bg-blue-100 p-4 rounded-lg shadow">
        //   <h2 className="font-bold">{cityWeather.name}</h2>
        //   <p>{cityWeather.weather?.[0]?.description}</p>
        //   <p>🌡️ {cityWeather.main?.temp}°C</p>
        // </div>
      ))}
    </div>
  );
}
