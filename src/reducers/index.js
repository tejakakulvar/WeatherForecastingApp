import { combineReducers } from 'redux';
import weatherdatareducer from './weatherdatareducer'

const rootReducer = combineReducers({
  weatherdata: weatherdatareducer
});

export default rootReducer;
