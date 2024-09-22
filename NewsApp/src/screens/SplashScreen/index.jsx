import React,{useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {styles} from './styles';

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigation = useNavigation();

    const hideSplashScreen = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        setTimeout(() => {
            hideSplashScreen();
            navigation.navigate('Tab');
        }, 1000)
    }, []);

    const renderSplash = () => {
        return (
            <View style={styles().SplashScreen_RootView}>
                <View style={styles().SplashScreen_ChildView}>
                    <Image
                        source={require('../../assets/splash_icon_dark.png')}
                        style={{width: 150, height: 150, resizeMode:'contain'}}
                    />
                </View>
            </View>
        )
    }
    return (
        <View style={styles().mainContainer}>
            {isVisible === true ? renderSplash() : null}
        </View>
    )
}

export default SplashScreen;
