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
                <Route exact path="/weather-app-challengue/" element={<WeatherScreen/>}/>
                <Route path="/weather-app-challengue/*" element={<Navigate replace to="/weather-app-challengue/" />} />
            </Routes>
            </div>
        </Router>
    )
}
