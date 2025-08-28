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
        <WeatherList/>
        </>
    )
}


