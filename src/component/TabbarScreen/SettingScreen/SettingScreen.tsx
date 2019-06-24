import React, { Component } from 'react';
import { Platform, StyleSheet, View, FlatList, AsyncStorage, SafeAreaView } from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Item,
    Input,
    Button,
    Left,
    Right,
    Body,
    Text,
    List, ListItem,
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IconFontAwe from "react-native-vector-icons/FontAwesome";

//TODO: Custome Object 
import { apiary, asyncStorageKeys } from "RoundTable/src/app/constant/Constants";

interface Props { }
export default class SettingScreen extends Component<Props, any> {
    constructor ( props: any ) {
        super( props )
        this.state = ( {
            data: []
        } )
    }



    render() {
        let { data } = this.state;
        return (
            <Container>
                <SafeAreaView style={ styles.container }>
                    <KeyboardAwareScrollView
                        enableAutomaticScroll
                        automaticallyAdjustContentInsets={ true }
                        keyboardOpeningTime={ 0 }
                        enableOnAndroid={ true }
                        contentContainerStyle={ { flexGrow: 1 } }
                    >
                        <View style={ { flex: 1 } }>
                            <Text>hi</Text>
                        </View>
                        <View>
                            <Text note style={ { textAlign: "center" } }>© 2019  All Rights Reserved. USkillShare | { '\n' }http://skillshare.web44.net</Text>
                        </View>
                    </KeyboardAwareScrollView>
                </SafeAreaView>
            </Container>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1
    }
} );