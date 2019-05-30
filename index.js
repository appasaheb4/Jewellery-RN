/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';


export default class Jewellery extends React.Component
{
    constructor ( props )    
    {
        super( props );
        this.state = {
            status: true,
            isStartPage: "PincodeNavigator"
        };
    }


    onComplited ( status, pageName )
    {
        try
        {
            this.setState( {
                status: status,
                isStartPage: pageName
            } );
        } catch ( e )
        {
            console.log( {
                e
            } );
        }
    }

    render ()
    {
        const Layout = createRootNavigator(
            this.state.status,
            this.state.isStartPage
        );
        const AppContainer = createAppContainer( Layout );
        return this.state.status ? (
            <LaunchScreen
                onComplited={ ( status: boolean, pageName: string ) =>
                    this.onComplited( status, pageName )
                }
            />
        ) : (
                <AppContainer />
            );
    }
}

console.disableYellowBox = true;
AppRegistry.registerComponent( appName, () => Jewellery );


