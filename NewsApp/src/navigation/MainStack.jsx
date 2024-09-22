import React from "react";
import {View, Text} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {
    SplashScreen,
    NewsDetails,
    CategoryList,
    About
} from '../screens/impMod';
import {Tabs} from './impMod';

const MainStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="SplashScreen">
            <Stack.Screen name="Tab" component={Tabs} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="NewsDetails" component={NewsDetails} />
            <Stack.Screen name="CategoryList" component={CategoryList} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default MainStack;
