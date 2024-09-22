import {persistCombineReducers} from 'redux-persist';
import Constants from '../../constants/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducers from "./authReducers";

const config = {
    key: Constants.asyncStorageKey,
    storage: AsyncStorage,
    blacklist: [],
}


const appReducer = persistCombineReducers(config, {
    auth: authReducers
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;
