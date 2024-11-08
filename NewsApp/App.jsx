import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RootNavigation} from './src/navigation/impMod';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from "redux-persist/integration/react";
import reduxStore from "./src/redux/store";
import EStyleSheet from "react-native-extended-stylesheet";

export const reduxPersistStore = persistStore(reduxStore);

const App = () => {

    useEffect(() => {
        EStyleSheet.build()
    }, [])

  return (
      <Provider store={reduxStore}>
        <PersistGate persistor={reduxPersistStore}>
          <RootNavigation/>
        </PersistGate>
      </Provider>
  )
}

export default App;
