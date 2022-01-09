import Clear from '../assets/Clear.png';
import Hail from '../assets/Hail.png';
import HeavyCloud from '../assets/HeavyCloud.png';
import HeavyRain from '../assets/HeavyRain.png';
import LightCloud from '../assets/LightCloud.png';
import LightRain from '../assets/LightRain.png';
import Shower from '../assets/Shower.png';
import Sleet from '../assets/Sleet.png';
import Snow from '../assets/Snow.png';
import Thunderstorm from '../assets/Thunderstorm.png';

 export const setWeatherIcon = (weather_state_abbr) => {
    switch (weather_state_abbr) {
        case "sn":
            return Snow;
        case "sl":
            return Sleet;
        case "h":
            return Hail;
        case "t":
            return Thunderstorm;
        case "hr":
            return HeavyRain;
        case "lr":
            return LightRain;
        case "s":
            return Shower;
        case "hc":
            return HeavyCloud;
        case "lc":
            return LightCloud;
        case "c":
            return Clear;

        default:
            return Clear;
    }
}