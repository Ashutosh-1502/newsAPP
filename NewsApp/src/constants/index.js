import defaultTheme from "@react-navigation/native/src/theming/DefaultTheme";
import {DarkTheme} from "@react-navigation/native";

export default {
    asyncStorageKey: 'NewsApp002',
    THEME: {
        primary: '#062743',
        secondary: '#82952',

        black: '1E1F20',
        white: '#FFFFFF',

        lightGrey: '#F5F5F6',
        lighterGrey2: '#F5F5F7',
        lightGray3: '#EFEFF1',
        lightGray4: '#F8F8F9',
        lightGrey5: '#9ea9b3',
    }
}

export const MyLightTheme = {
    ...defaultTheme,
    dark: false,
    colors: {
        ...defaultTheme.colors,
        primary: '#062743',
        secondary: '#82952',

        black: '1E1F20',
        white: '#FFFFFF',

        lightGrey: '#F5F5F6',
        lighterGrey2: '#F5F5F7',
        lightGray3: '#EFEFF1',
        lightGray4: '#F8F8F9',
        lightGrey5: '#9ea9b3',
    },
};

export const MyDarkTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        primary: '#062743',
        secondary: '#182952',
        card: '#1f1f1f',
        black: '#1E1F20',
        white: '#FFFFFF',

        lightGrey: '#F5F5F6',
        lighterGrey2: '#F6F6F7',
        lightGray3: '#EFEFF1',
        lightGray4: '#F8F8F9',
        lightGrey5: '#9ae9b3'

    }
}
