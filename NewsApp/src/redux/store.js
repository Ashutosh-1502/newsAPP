import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/index'; // or you can use combineReducers from @reduxjs/toolkit
import promiseMiddleware from './middleware/apiCalls';


const reduxStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(promiseMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default reduxStore;
