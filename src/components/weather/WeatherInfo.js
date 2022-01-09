import React from 'react'
import { useSelector } from 'react-redux';



import moment from 'moment';
import { setWeatherIcon } from '../../helpers/setIcon';
export const WeatherInfo = () => {

    const state = useSelector(state => state.weather.locationWeatherList);

    const { consolidated_weather, time, title } = state;

    const dateLocation = moment(time).format('[Today .] ddd, D MMM');
    if (consolidated_weather != null) {
        var { weather_state_name, weather_state_abbr, the_temp } = consolidated_weather[0];


    }


   

    return (

        <div className='bg-container mt-5'>
            {
                state != null ?

                    <div className='text-center weather-info '>
                        <div className='bg-clouds'></div>


                        <img src={
                            setWeatherIcon(weather_state_abbr)
                        } alt="img" />

                        <h4>{
                            the_temp &&
                            Math.round(the_temp)
                        }
                            <span>°c</span>
                        </h4>
                        <br />
                        <p>{weather_state_name}</p>
                        <br />
                        <div className='d-flex flex-column current-date-info'>
                            <p>{dateLocation}</p>
                            <p><span className='material-icons'>location_on</span>{title}</p>
                        </div>

                    </div>
                    : <p>Sin Información</p>
            }
        </div>
    )
}
