import React from 'react';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import Ion from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {styles} from './styles'
import {connect} from "react-redux";
import {updateOnboarding} from "../../redux/actions/authAction";

const OnboardingScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const slides = [
        {
            key: 'slides1',
            image: require('../../assets/onboarding/frontal_home.png'),
            title: 'Welcome to the React Native News App',
            text: 'Here you can read latest news updates. By registering to this application.'
        },
        {
            key: 'slides2',
            image: require('../../assets/onboarding/doodle_reading.png'),
            title: 'Read News',
            text: 'Read news at anywhere at any place just by connecting to the internet'
        },
        {
            key: 'slides3',
            image: require('../../assets/onboarding/stting_on_floor.png'),
            title: 'Add to Favorite',
            text: 'Add to Favorite read List and also you can add Comments',
        },
    ];

    const _renderItem = ({item}) => {
        return (
            <View style={styles().slide}>
                <View style={styles().titleContainer}>
                    <Text style={styles().title}>{item.title}</Text>
                </View>
                <View style={styles().imageContainer}>
                    <Image source={item.image} style={styles().image}/>
                </View>
                <View style={styles().textContainer}>
                    <Text style={styles().text}>{item.text}</Text>
                </View>
            </View>
        )
    }

    const _renderNextButton = () => {
        return (
            <View style={styles().buttonCircle}>
                <Ion name="arrow-forward-outline" color="rgba(255,255,255,0.9)" size={24}/>
            </View>
        )
    }

    const _renderDoneButton = () => {
        return (
            <View style={styles().buttonCircle}>
                <Ion name="arrow-forward-outline" color="rgba(255,255,255,0.9)" size={24}/>
            </View>
        )
    }

    const _renderSkipButton = () => {
        return (
            <View style={styles().skipView}>
                <Text style={styles().skipTextColor}>Skip</Text>
            </View>
        )
    }

    const _onEndReached = () => {
        dispatch(updateOnboarding(true));
        navigation.navigate('Login')
    }

    return (
        <AppIntroSlider
            data={slides}
            renderItem={_renderItem}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            renderSkipButton={_renderSkipButton}
            onDone={_onEndReached}
            onSkip={_onEndReached}
            dotClickEnabled={true}
            showNextButton={true}
            showSkipButton={true}
            showDoneButton={true}
        />
    )
}

export default OnboardingScreen;
