
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppBarSearchCity } from '../ui/AppBarSearchCity';
import { AppBar } from '../ui/AppBar';
import { LocationWeather} from './LocationWeather';
import { startLoadLocationWeather } from '../../actions/weather';
import { CitySearchedItem } from './CitySearchedItem';
import { CardForecast } from './CardForecast';
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export const WeatherScreen = () => {

    const { dataCitySearched, locationWeatherList, activeSearchCity } = useSelector(state => state.weather);
    const { loading } = useSelector(state => state.ui);
    const { consolidated_weather } = locationWeatherList;


    const dispatch = useDispatch();
    const handleClickCitySearch = () => {
        dispatch(startLoadLocationWeather(dataCitySearched[0].woeid));
    }



    return (
        <div>
            {
                loading &&
                <div className='vh-100 d-flex justify-content-center align-items-center'>
                    <div>
                        <PulseLoader color={"#6E9CD3"} loading={loading} css={override} size={15} margin={2} />
                        <p>Wait plase...</p>
                    </div>
                </div>

            }
            {
                !loading &&
                <div className='d-flex flex-md-row flex-column'>
                    <div className='col-12 col-md-3 sidebar'>
                        {
                            (activeSearchCity === false) ?
                                <div>
                                    <AppBar />
                                    <LocationWeather />
                                </div>
                                :
                                <div className='mt-2 p-1'>
                                    <AppBarSearchCity />
                                    {
                                        dataCitySearched.map(element => {
                                            return <CitySearchedItem key={element.woeid} element={element} handleClickCitySearch={handleClickCitySearch} />
                                        })

                                    }

                                </div>
                        }
                    </div>
                    <div className='col-12 col-md-9'>

                        <div className='container'>
                            <div className='cards-forecast'>
                                {
                                    consolidated_weather &&
                                    consolidated_weather.slice(1).map(element => {

                                        return <CardForecast key={element.id} element={element} />
                                    })


                                }

                            </div>
                            <div className='mt-5'>
                                <h3 className='px-5 mx-4'>Today's Highlights</h3>
                                {
                                    consolidated_weather &&
                                    <div className='cards-highlights'>

                                        <div className='card-highlight'>
                                            <p>Wind Status</p>
                                            <h1>{Math.round(consolidated_weather[0].wind_speed)} mph</h1>
                                            <div className='d-flex justify-content-around align-items-center'>
                                                <div className='rounded-circle p-1 material-icons md-light bg-secondary mx-2 '>near_me
                                                </div>
                                                <div>{consolidated_weather[0].wind_direction_compass}</div>
                                            </div>
                                        </div>
                                        <div className='card-highlight '>
                                            <p>Humidity</p>
                                            <h1>{consolidated_weather[0].humidity}%</h1>
                                          
                                               <label htmlFor="range">
                                                   
                                                <input name='range' type="range" readOnly value={consolidated_weather[0].humidity} />
                                               </label>
                                        

                                        </div>
                                        <div className='card-highlight'>
                                            <p>Visibility</p>
                                            <h1>{Math.round(consolidated_weather[0].visibility)} miles</h1>

                                        </div>
                                        <div className='card-highlight'>
                                            <p>Air Pressure</p>
                                            <h1>{Math.round(consolidated_weather[0].air_pressure)} mb</h1>

                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                        <footer className='footer'>

                          <small><a className='footer__link' href="https://github.com/ronaldoisc" target="blank" >ronaldoisc</a>   - devChallengues.io</small>
                        </footer>
                    </div>
                </div>
            }
        </div>
    )
}
