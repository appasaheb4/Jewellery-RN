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
import Slideshow from 'react-native-image-slider-show';

import Icon from "react-native-vector-icons/FontAwesome5";
import Grid from "react-native-grid-component";
import { colors } from "Jewellery/src/app/constant/Constants";


//TODO: Custome Comp
import CustomeStatusBar from "Jewellery/src/app/custcompontes/CustomeStatusBar/CustomeStatusBar";

export default class HomeScreen extends Component<any, any> {

    constructor ( props: any ) {
        super( props );
        this.state = {
            data: [ {
                title: "New Customer",
                icon: "users"
            },
            {
                title: "two",
                icon: "bars"
            },
            {
                title: "three",
                icon: "bars"
            },
            ],
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Title 1',
                    caption: 'Caption 1',
                    url: 'https://reactnativecode.com/wp-content/uploads/2018/12/slideshow_1.png',
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: 'http://placeimg.com/640/480/any',
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: 'https://reactnativecode.com/wp-content/uploads/2018/12/slideshow_1.png',
                },
            ],
            isLoading: true
        };
    }

    componentWillMount() {
        this.setState( {
            interval: setInterval( () => {
                this.setState( {
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                } );
            }, 5000 )
        } );
    }
    //TODO: click on item grid
    click_Item( title: any ) {

    }

    componentWillUnmount() {
        clearInterval( this.state.interval );
    }

    //TODO: Grid System
    _renderItem = ( data: any, i: any ) => (
        <View
            style={ [
                { backgroundColor: colors.appColor },
                styles.item
            ] }
            key={ i }
        >
            <TouchableOpacity onPress={ () => this.click_Item( data.title ) }>
                <Icon
                    name={ data.icon }
                    style={ { marginTop: 15, alignSelf: "center" } }
                    color="#fff"
                    size={ 30 }
                />
                <Text
                    style={ {
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#fff",
                        marginTop: 10
                    } }
                >
                    { data.title }
                </Text>
            </TouchableOpacity>
        </View>
    );
    render() {
        return (
            <Container>

                <Header style={ { backgroundColor: colors.appColor, marginTop: 20 } }>
                    <CustomeStatusBar backgroundColor={ colors.appColor } flagShowStatusBar={ true } barStyle="light-content" />
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
                        <Button transparent onPress={ () => Alert.alert( 'working' ) }>
                            <Icon name="plus" size={ 25 } color="#ffffff" />
                        </Button>
                    </Right>
                </Header>
                <Content contentContainerStyle={ styles.container }>
                    <View style={ { flex: 0.45 } }>
                        <Slideshow
                            dataSource={ this.state.dataSource }
                            position={ this.state.position }
                            containerStyle={ { marginTop: 0 } }
                            onPositionChanged={ position => this.setState( { position } ) } />
                    </View>
                    <View style={ { flex: 1 } }>
                        <Grid
                            style={ styles.list }
                            renderItem={ this._renderItem }
                            data={ this.state.data }
                            itemsPerRow={ 3 }
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1
    },
    //Grid System
    item: {
        flex: 1,
        height: 80,
        margin: 1,
        borderRadius: 5,
        alignItems: "center"
    },
    list: {
        flex: 1
    }
} );
