import React from "react";
import { colors } from "Jewellery/src/app/constant/Constants";

import {
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator
} from "react-navigation";
import ConfirmPincodeScreen from "Jewellery/src/component/PincodeScreen/ConfirmPincodeScreen";
import PincodeScreen from "Jewellery/src/component/PincodeScreen/PincodeScreen";


//TODO: StackNavigator
//TODO: StackNavigator:ONBoarding
const OnBoardingStackNavigator = createStackNavigator(
    {
        ConfirmPincodeScreen: {
            screen: ConfirmPincodeScreen,
            navigationOptions: { header: null }
        },
        PincodeScreen: {
            screen: PincodeScreen,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: "ConfirmPincodeScreen"
    }
);




//TODO: TabNavigator
//TODO: TabNavigator:TabNavigator

// const TabNavigator = createBottomTabNavigator(
//     {
//         WalletScreen: {
//             screen: ConfirmPincodeScreen, //PaymentScreen,
//             navigationOptions: {
//                 tabBarLabel: "Wallet", //localization("TabBarItem.Payment"),
//                 drawerLockMode: "locked-open",

//             }
//         },
//         Analytics: {
//             screen: ConfirmPincodeScreen,
//             navigationOptions: {
//                 tabBarLabel: "Transaction", //localization("TabBarItem.Analytics"),

//             }
//         },
//         QrCodeScannerScreen: {
//             screen: ConfirmPincodeScreen,
//             navigationOptions: {
//                 tabBarLabel: "QR", //localization("TabBarItem.Accounts"),

//             }
//         },

//         Settings: {
//             screen: ConfirmPincodeScreen,
//             navigationOptions: {
//                 tabBarLabel: "Settings", //localization("TabBarItem.More"),

//             }
//         }
//     },
//     {
//         initialRouteName: "WalletScreen",
//         tabBarOptions: {
//             showLabel: true,
//             //swipeEnabled: true,
//             showIcon: true,
//             activeTintColor: colors.appColor,
//             labelStyle: {
//                 fontSize: 11,
//                 fontFamily: "FiraSans-Medium"
//             },
//             style: {
//                 backgroundColor: "#ffffff"
//             },
//             tabStyle: {}
//         }
//     }
// );


//TODO: RootNavigator
//TODO: RootNavigator:createRootNavigator
export const createRootNavigator = (
    signedIn = false,
    screenName = "PincodeNavigator"
) => {
    return createStackNavigator(
        {
            PincodeNavigator: {
                screen: PincodeScreen,
                navigationOptions: { header: null }
            },
            ConfirmPincodeNavigator: {
                screen: ConfirmPincodeScreen,
                navigationOptions: { header: null }
            }
            // TabbarBottomNavigator: {
            //     screen: TabNavigator,
            //     navigationOptions: { header: null }
            // }
        },
        {
            initialRouteName: signedIn ? "PincodeNavigator" : screenName
        }
    );
};

