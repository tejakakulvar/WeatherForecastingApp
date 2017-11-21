import  {FETCH_WEATHER_DATA} from '../actions/index'


export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER_DATA:
      if(action.payload.request.status == '404'){
        return state;
      }
      console.log(action.payload.data);
      return [action.payload.data, ...state];

      // return{
      //   ...state,weather:action.payload.data
      // };
  }
  return state;
}
