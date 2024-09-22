import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
    Home,
    Favorite,
    Notification,
    Account
} from '../screens/impMod';
import Icons from "react-native-vector-icons/Ionicons";
import {moderateScale} from'react-native-size-matters';

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#062743",
                tabBarInactiveTintColor: "#9ea9b3",
                tabBarStyle: {
                    marginVertical: moderateScale(10),
                },
                showLabel: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({size, color }) => (
                        <Icons name="home-sharp" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarIcon: ({size, color }) => (
                        <Icons name="heart-sharp" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarIcon: ({size, color }) => (
                        <Icons name="notifications-sharp" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({size, color }) => (
                        <Icons name="person-sharp" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
