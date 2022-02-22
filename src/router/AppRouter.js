import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { startLoadLocationWeather } from '../actions/weather'
import { WeatherScreen } from '../components/weather/WeatherScreen'

export const AppRouter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startLoadLocationWeather('116545'));
       
    })
   
    return (
        <Router>
            <div>
            <Routes>
                <Route exact path="/" element={<WeatherScreen/>}/>
                <Route path="/*" element={<Navigate replace to="/" />} />
            </Routes>
            </div>
        </Router>
    )
}
