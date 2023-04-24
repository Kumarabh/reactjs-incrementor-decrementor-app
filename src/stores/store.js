import {IncDecReducer} from '../reducers/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    IncDecReducer
})
const store = configureStore({
  reducer,
})
export default store;
