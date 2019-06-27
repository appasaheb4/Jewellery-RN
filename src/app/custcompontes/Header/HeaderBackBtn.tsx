import React, { Component } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import {
    Button
} from "native-base";
import { SvgIcon } from "@up-shared/components";

export default class HeaderBackBtn extends Component<any, any> {
    constructor ( props: any ) {
        super( props )
    }

    componentWillReceiveProps( nextProps: any ) {
        console.log( { nextProps } );
        let data = nextProps.data;
        if ( data.length != 0 ) {

        }
    }


    render() {
        return (
            <View style={ { marginLeft: 10, marginTop: 15 } }>
                <Button
                    transparent
                    onPress={ () => this.props.navigation.pop() }
                >
                    <SvgIcon name="icon_back" size={ Platform.OS == "ios" ? 25 : 20 } color="#000000" />
                    <Text style={ [ { color: "#000000", alignSelf: "center", fontSize: Platform.OS == "ios" ? 25 : 20, marginLeft: 0 } ] }>App name</Text>
                </Button>
            </View>
        );
    };
}

