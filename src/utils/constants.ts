import clear_day from '../../src/assets/weather-icons/clear-day.svg';
import clear_night from '../../src/assets/weather-icons/clear-night.svg';
import cloudy from '../../src/assets/weather-icons/cloudy.svg';
import fog from '../../src/assets/weather-icons/fog.svg';
import hail from '../../src/assets/weather-icons/hail.svg';
import partly_cloudy_day from '../../src/assets/weather-icons/partly-cloudy-day.svg';
import partly_cloudy_night from '../../src/assets/weather-icons/partly-cloudy-night.svg';
import rain from '../../src/assets/weather-icons/rain.svg';
import rain_snow from '../../src/assets/weather-icons/rain-snow.svg';
import rain_snow_showers_day from '../../src/assets/weather-icons/rain-snow-showers-day.svg';
import rain_snow_showers_night from '../../src/assets/weather-icons/rain-snow-showers-night.svg';
import showers_day from '../../src/assets/weather-icons/showers-day.svg';
import showers_night from '../../src/assets/weather-icons/showers-night.svg';
import sleet from '../../src/assets/weather-icons/sleet.svg';
import snow from '../../src/assets/weather-icons/snow.svg';
import snow_showers_day from '../../src/assets/weather-icons/snow-showers-day.svg';
import snow_showers_night from '../../src/assets/weather-icons/snow-showers-night.svg';
import thunder from '../../src/assets/weather-icons/thunder.svg';
import thunder_rain from '../../src/assets/weather-icons/thunder-rain.svg';
import thunder_showers_day from '../../src/assets/weather-icons/thunder-showers-day.svg';
import thunder_showers_night from '../../src/assets/weather-icons/thunder-showers-night.svg';
import wind from '../../src/assets/weather-icons/wind.svg';

const API_KEY = 'AT77ZRW9TM5N52BHDMKZETM28';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'Jun',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const icons: { [index: string]: any } = {
  'clear-day': clear_day,
  'clear-night': clear_night,
  cloudy: cloudy,
  fog: fog,
  hail: hail,
  'partly-cloudy-day': partly_cloudy_day,
  'partly-cloudy-night': partly_cloudy_night,
  rain: rain,
  rain_snow: rain_snow,
  'rain-snow-showers-day': rain_snow_showers_day,
  'rain-snow-showers-night': rain_snow_showers_night,
  'showers-day': showers_day,
  'showers-night': showers_night,
  sleet: sleet,
  snow: snow,
  'snow-showers-day': snow_showers_day,
  'snow-showers-night': snow_showers_night,
  thunder: thunder,
  'thunder-rain': thunder_rain,
  'thunder-showers-day': thunder_showers_day,
  'thunder-showers-night': thunder_showers_night,
  wind: wind,
};

export { days, months, icons, shortDays, API_KEY };
