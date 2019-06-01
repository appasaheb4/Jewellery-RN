import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "Jewellery/src/app/constant/Constants";
import {
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator
} from "react-navigation";
import ConfirmPasscodeScreen from "Jewellery/src/component/PincodeScreen/ConfirmPasscodeScreen";
import PasscodeScreen from "Jewellery/src/component/PincodeScreen/PasscodeScreen";


//TODO: Tabbar 
import HomeScreen from "Jewellery/src/component/TabbarScreen/HomeScreen/HomeScreen";


//TODO: StackNavigator
//TODO: StackNavigator:ONBoarding
const OnBoardingStackNavigator = createStackNavigator(
    {
        ConfirmPasscodeScreen: {
            screen: ConfirmPasscodeScreen,
            navigationOptions: { header: null }
        },
        PasscodeScreen: {
            screen: PasscodeScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: "ConfirmPasscodeScreen"
    }
);




//TODO: TabNavigator
//TODO: TabNavigator:TabNavigator

const TabNavigator = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen, //PaymentScreen,
            navigationOptions: {
                tabBarLabel: "Home", //localization("TabBarItem.Payment"),
                tabBarIcon: ( { tintColor } ) => (
                    <Icon name="home" color={ tintColor } size={ 22 } />
                ),

            }
        }
    },
    {
        initialRouteName: "HomeScreen",
        tabBarOptions: {
            showLabel: true,
            //swipeEnabled: true,
            showIcon: true,
            activeTintColor: colors.appColor,
            labelStyle: {
                fontSize: 11,
                fontFamily: "FiraSans-Medium"
            },
            style: {
                backgroundColor: "#ffffff"
            },
            tabStyle: {}
        }
    }
);


//TODO: RootNavigator
//TODO: RootNavigator:createRootNavigator
export const createRootNavigator = (
    signedIn = false,
    screenName = "PincodeNavigator"
) => {
    return createStackNavigator(
        {
            PasscodeNavigator: {
                screen: PasscodeScreen,
                navigationOptions: { header: null }
            },
            ConfirmPasscodeNavigator: {
                screen: ConfirmPasscodeScreen,
                navigationOptions: { header: null }
            },
            TabNavigator: {
                screen: TabNavigator,
                navigationOptions: { header: null }
            }
        },
        {
            initialRouteName: signedIn ? "PasscodeNavigator" : screenName
        }
    );
};

