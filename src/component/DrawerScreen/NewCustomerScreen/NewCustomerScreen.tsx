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

//TODO: Custome Object
import { colors } from "Jewellery/src/app/constant/Constants";

export default class NewCustomerScreen extends Component<any, any> {
    constructor ( props: any ) {
        super( props );
        this.state = {
            flag_Loading: true
        };
    }

    render() {
        return (
            <Container>
                <Header style={ { backgroundColor: colors.appColor } }>
                    <Left>
                        <Button
                            transparent
                            onPress={ () => this.props.navigation.toggleDrawer() }
                        >
                            <Icon name="bars" size={ 25 } color="#ffffff" />
                        </Button>
                    </Left>
                    <Body style={ { flex: 0, alignItems: "center" } }>
                        <Title
                            adjustsFontSizeToFit={ true }
                            numberOfLines={ 1 }

                        >
                            Jewellery
            </Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={ () => this.props.navigation.push( "NotificationScreen" ) }
                        >
                            <Icon name="bell" size={ 25 } color="#ffffff" />
                        </Button>
                        <Button transparent onPress={ this.click_openPopupAccountType }>
                            <Icon name="plus" size={ 25 } color="#ffffff" />
                        </Button>
                    </Right>
                </Header>
                <Content contentContainerStyle={ styles.container }>
                    <View style={ { flex: 1, padding: 5 } }>
                        <Text>New  Customer</Text>
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
