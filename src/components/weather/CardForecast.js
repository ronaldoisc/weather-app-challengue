import React from 'react'
import moment from 'moment';
import { setWeatherIcon } from '../../helpers/setIcon';

export const CardForecast = ({ element }) => {
    const tomorrow = moment().add(1, 'days').format('d')
    return (
        <div key={element.id} className='card-forecast'>
            {
                moment(element.applicable_date).day() == tomorrow ?
                    <p>
                        {moment(element.applicable_date).format('[Tomorrow]')}</p>
                    :
                    <p>{moment(element.applicable_date).format('ddd, D MMM')}</p>
            }
            <img src={
                setWeatherIcon(element.weather_state_abbr)
            } alt={element.weather_state_abbr} height={100}/>
            <div className='degress'>
                <p>
                    <span> {Math.round(element.max_temp)} </span>
                    <span>°c</span>
                </p>

                <p className='opacity-75'>
                    <span>
                        {Math.round(element.min_temp)}
                    </span>
                    <span>

                        °c
                    </span>
                </p>
            </div>
        </div>
    )
}
