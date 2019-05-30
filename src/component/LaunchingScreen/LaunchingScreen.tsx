import React, { Component } from "react";
import {
    View,
    AsyncStorage,
    Image,
    StyleSheet,
    ImageBackground,
    Text,
    Alert,
    StatusBar,
    Animated,
    Easing
} from "react-native";

import { colors, images, asyncStorageKeys } from "Jewellery/src/app/constants/Constants";
import Singleton from "Jewellery/src/app/constants/Singleton";

interface Props {
    onComplited: Function;
}

export default class LaunchingScreen extends Component<Props, any> {
    constructor ( props: any ) {
        super( props );
        this.state = ( {
            centerLogo: null,
            centerLogoOpticy: new Animated.Value( 0 )
        } )
    }

    async componentDidMount() {
        let commonData = Singleton.getInstance();
        let value = await AsyncStorage.getItem( asyncStorageKeys.flag_PasscodeCreate );
        let rootViewController = await AsyncStorage.getItem( asyncStorageKeys.rootViewController );
        console.log( { value, rootViewController } );
        let status = JSON.parse( value );
        const credentials = await Keychain.getGenericPassword();
        commonData.setPasscode( credentials.password );
        setTimeout( () => {
            if ( rootViewController == "PasscodeConfirmScreen" ) {
                this.props.onComplited( false, rootViewController );
            }
            else if ( status ) {
                this.props.onComplited( false, "PasscodeScreen" );
            }
            else {
                this.props.onComplited( false, "OnBoardingNavigator" );
            }
        }, 3000 );
        Animated.timing( this.state.centerLogoOpticy, {
            toValue: 1,
            duration: 100,
            easing: Easing.bounce
        } ).start();
    }


    render() {
        const animatedOpcity = { opacity: this.state.centerLogoOpticy }
        return (
            <View style={ styles.container }>
                <StatusBar hidden />
                <ImageBackground
                    source={ images.appBackgound }
                    style={ styles.backgroundImage }
                    imageStyle={ {
                        resizeMode: "cover" // works only here!
                    } }
                >
                    <Animated.Image
                        source={ images.logo }
                        style={ [ animatedOpcity, { height: 200, width: 200 } ] }
                    />
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create( {
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
} );
