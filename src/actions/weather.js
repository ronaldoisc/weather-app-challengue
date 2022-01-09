import { loadLocationSearchAsync, loadLocationWeatherAsync} from "../helpers/loadWeather";
import { types } from "../types/types";
import { uiFinishLoading, uiStartLoading } from "./ui";



export const startLoadLocationSearch=(query)=>{
    return async(dispatch)=>{
      dispatch(uiStartLoading());
        const dataCitySearched=await loadLocationSearchAsync(query);
        dispatch(setLocationSearch(dataCitySearched));
        dispatch(uiFinishLoading());
    }
}

export const startLoadLocationWeather=(woedId)=>{
  return async(dispatch)=>{
    dispatch(uiStartLoading());
    const dataLocationWeather=await loadLocationWeatherAsync(woedId);
    dispatch(setLocationWeather(dataLocationWeather));
    dispatch(uiFinishLoading());

  }
}

export const setLocationSearch=(dataCitySearched)=>({
    type:types.setLocationSearch,
    payload:dataCitySearched
});

export const setLocationWeather=(dataLocationWeather)=>({
  type:types.setLocationWeather,
  payload:dataLocationWeather
});

export const setActiveSearch=()=>({
    type:types.activeSearchCity
});
export const setDeactivateSearch=()=>({
  type:types.deactivateSearchCity

});

export const cleanDataCitySearched=()=>({
  type:types.cleanDataCitySearched
});

