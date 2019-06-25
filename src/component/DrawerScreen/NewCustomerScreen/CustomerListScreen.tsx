import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    List,
    Input,
    ListItem,
    Thumbnail
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

//TODO: Customer Object
import { colors } from "Jewellery/src/app/constant/Constants";

export default class CustomerListScreen extends Component<any, any> {

    constructor ( props: any ) {
        super( props );
        this.state = {
            flag_Loading: true
        };
    }

    render() {
        //array
        //values
        //flag   
        return (
            <Container>
                <Content contentContainerStyle={ styles.container }>
                    <View style={ { flex: 1, padding: 5 } }>
                        <Text>hi</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1
    }
} );
