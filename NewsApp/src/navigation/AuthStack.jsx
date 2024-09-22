import React from "react";
import {useSelector} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";
import {
    SplashScreen,
    Login,
    Register,
    OnboardingScreen,
    NewsDetails,
    CategoryList,
    About
} from '../screens/impMod'
import {Tabs} from './impMod';

const AuthStack = () => {
    const isOnboardingDisabled = useSelector((state) => state.auth.isOnboardingDisabled);
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={isOnboardingDisabled ? "Splash" : "Onboarding"}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Tab" component={Tabs} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="NewsDetails" component={NewsDetails} />
            <Stack.Screen name="CategoryList" component={CategoryList} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default AuthStack;
