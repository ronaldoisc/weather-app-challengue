
import { types } from "../types/types";

const initialState={
    dataCitySearched:[],
    locationWeatherList:{},
    activeSearchCity:false
}
export const weatherReducer=(state=initialState,action)=>{
    switch (action.type) {
  
        case types.setLocationSearch:
            return {
                ...state,
                dataCitySearched:action.payload
            }
        case types.setLocationWeather:
            return {
                ...state,
                locationWeatherList:action.payload
            }
        case types.activeSearchCity:
            return {
                ...state,
                activeSearchCity:true

            }
        case types.deactivateSearchCity:
            return {
                ...state,
                activeSearchCity:false
            }

        case types.cleanDataCitySearched:
            return {
                ...state,
                city:'',
                dataCitySearched:[],
            }
    
        default:
            return state;
    }

}