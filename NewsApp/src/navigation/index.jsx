import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import AuthStack from './AuthStack.jsx';
import {NavigationContainer} from "@react-navigation/native";

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

export default RootNavigation;
