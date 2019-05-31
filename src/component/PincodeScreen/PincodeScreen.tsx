import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    Platform,
    Dimensions,
    Image,
    Keyboard,
    StatusBar,
    Linking
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import CodeInput from "react-native-confirmation-code-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



//TODO: Custome Object     
import { colors, images, asyncStorageKeys } from "Jewellery/src/app/constant/Constants";
import renderIf from "Jewellery/src/app/constant/validation/renderIf";

export default class PincodeScreen extends Component<any, any> {

    constructor ( props: any ) {
        super( props );
        this.state = {
            status: false,
            pincode: "",
            success: "Passcode does not match!",
            flag_dialogShow: false,
            passcodeStyle: [
                {
                    activeColor: colors.black,
                    inactiveColor: colors.black,
                    cellBorderWidth: 0
                }
            ]
        };
    }

    //TODO: Page Life Cycle
    _onFinishCheckingCode( isValid: boolean, code: string ) {
        if ( isValid ) {
            this.setState( {
                status: true,
                passcodeStyle: [
                    {
                        activeColor: colors.black,
                        inactiveColor: colors.black,
                        cellBorderWidth: 0
                    }
                ]
            } );
        } else {
            this.setState( {
                passcodeStyle: [
                    {
                        activeColor: "red",
                        inactiveColor: "red",
                        cellBorderWidth: 1
                    }
                ]
            } );
        }
    }


    onSuccess = async ( code: string ) => {
        console.log( { code } );
    };
    render() {
        return (
            <View style={ styles.container }>
                <KeyboardAwareScrollView
                    enableAutomaticScroll
                    automaticallyAdjustContentInsets={ true }
                    keyboardOpeningTime={ 0 }
                    enableOnAndroid={ true }
                    contentContainerStyle={ { flexGrow: 1 } }
                >
                    <View style={ styles.viewAppLogo }>
                        <Image style={ styles.imgAppLogo } source={ images.logo } />
                        <Text
                            style={ [ { color: "#000000", marginTop: 20 } ] }
                        >
                            Hello, Crypto wizard
            </Text>
                    </View>
                    <View style={ styles.viewPasscode }>
                        <Text
                            style={ [ { marginTop: 10, color: "#8B8B8B" } ] }
                        >
                            Re - Enter Passcode{ " " }
                        </Text>
                        <CodeInput
                            ref="codeInputRef1"
                            secureTextEntry
                            keyboardType="numeric"
                            codeLength={ 5 }
                            compareWithCode={ this.state.pincode }
                            activeColor={ this.state.passcodeStyle[ 0 ].activeColor }
                            inactiveColor={ this.state.passcodeStyle[ 0 ].inactiveColor }
                            className="border-box"
                            cellBorderWidth={ this.state.passcodeStyle[ 0 ].cellBorderWidth }
                            compareWithCode={ this.state.pincode }
                            autoFocus={ true }
                            inputPosition="center"
                            space={ 10 }
                            size={ 55 }
                            codeInputStyle={ { borderRadius: 5, backgroundColor: "#F1F1F1" } }
                            containerStyle={ {
                                alignItems: "center",
                                justifyContent: "center",
                                height: Platform.OS == "ios" ? 0 : 40,
                            } }
                            onFulfill={ ( isValid, code ) =>
                                this._onFinishCheckingCode( isValid, code )
                            }
                        />
                        { renderIf( this.state.passcodeStyle[ 0 ].activeColor == "red" )(
                            <Text style={ [ { color: "red", marginTop: 44 } ] }>{ this.state.success }</Text>
                        ) }
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

let styles = StyleSheet.create( {
    container: {
        flex: 1
    },
    viewAppLogo: {
        flex: 1,
        alignItems: "center",
        marginTop: 50
    },
    imgAppLogo: {
        height: 150,
        width: 150
    },
    viewPasscode: {
        flex: 1,
        alignItems: "center"
    },
    viewBtnProceed: {
        flex: 3,
        justifyContent: "flex-end",
        marginBottom: 20
    }
} );
