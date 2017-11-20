import axios from 'axios';

const APIKey = 'e680fd68142debf7f17e65b87cbc1c92';
//const URL='http://api.openweathermap.org/data/2.5/forecast?appid='+APIKey
const URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${APIKey}`
export const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA'
export const fetchweatherdata = function(city){
  const finalurl = `${URL}&q=${city},us`;
  const request = axios.get(finalurl);
  // the above request is a asynchronous request
  // when the above action is made the request is a promise object before entering into redux
  // redux promise which is redux middleware resolves this request and then sends the new action with same type but
  // the pay load is the response data
  console.log(request);
  return{
    type: FETCH_WEATHER_DATA,
    payload: request
  }
}
