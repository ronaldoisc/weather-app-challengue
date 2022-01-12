
const base_url='https://cors-anywhere.herokuapp.com/metaweather.com'
// const base_url='https://www.metaweather.com'
export const loadLocationSearchAsync = async(query) => {
  
   const location_search_response=await fetch(`${base_url}/api/location/search/?query=${query}`);
   const data=await location_search_response.json();
  
    return data[0] !=null ? data : null


}

export const loadLocationWeatherAsync= async(woeid)=>{

   const locationWeather_response=await fetch(`${base_url}/api/location/${woeid}`);
   const data=await locationWeather_response.json();
   return data;
}


