'use client'
import { useEffect, useState } from "react";
import WeatherList from "./components/WeatherList";




export default function home(){
    return (
        <>
        <div className='flex justify-center mt-10'>
            <div className="bg-white rounded-2xl  w-50 h-10 flex justify-center p-10">
                <div className="bg-violet-400 rounded-2xl h-5 w-40 flex justify-center items-center">
                <h1 className="text-black text-center">weather now</h1>
                </div>
            </div>
        </div>
        {/* <div className="grid grid-cols-8 ">
            <div className="w-52 m-3 shadow-2xl">
                <div className="h-48 w-full text-black bg-gradient-to-b from-sky-400 via-sky-200 to-yellow-100 rounded-t-2xl grid grid-cols-2">
                    <div className="p-3 mt-4">
                        <h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                            </svg>
                        </h1>
                    </div>
                    <div className="p-3 mt-4 text-right">
                        <h1>cerah</h1>
                        <h1>31</h1>
                        <h1>Jakarta, Indonesia</h1>
                    </div>
                </div>
                <div className="h-32 w-full bg-white grid grid-cols-2">
                    <div className="text-gray-600 p-3 rounded-2xl">
                        <h1>Wind</h1>
                        <h1>Humidity</h1>
                        <h1>Preassure</h1>
                    </div>
                    <div className="text-right text-black p-3">
                        <h1>15 Knots</h1>
                        <h1>78%</h1>
                        <h1>49</h1>
                    </div>
                </div>
            </div>
        </div> */}
        <WeatherList/>
        </>
    )
}


