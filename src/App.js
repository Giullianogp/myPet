import { SignIn, SignUp, Home, PetDetail, AppIntro } from '../src/components';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Root } from 'native-base';
import React from 'react';


const AppStack = createStackNavigator(
    {
        Home: Home,
        PetDetail: PetDetail
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#3E9B91',
            headerStyle: {
                backgroundColor: '#00C8BB',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff'
            },
            headerBackTitleStyle: {
                color: '#fff'
            }
        }
    }
);
const AuthStack = createStackNavigator(
    {
        SignUp: SignUp,
        SignIn: SignIn
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#00C8BB',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff'
            },
        }
    }
);

const AppNavigator = createSwitchNavigator(
    {
        Cadastro: AuthStack,
        App: AppStack
    },
    {
        initialRouteName: 'Cadastro',
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#3E9B91',
            headerStyle: {
                backgroundColor: '#00C8BB',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff'
            },
        }
    }
);

const AppI = createSwitchNavigator(
    {
        Intro: AppIntro,
        AppLogin: AppNavigator
    },
    {
        initialRouteName: 'Intro',
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#3E9B91',
            headerStyle: {
                backgroundColor: '#00C8BB',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff'
            },
        }
    }
);



export default () =>

    // const appInitial = true ? <AppNavigator /> : <AppIntro/> 

    // return (
    //     <Root>
    //         {appInitial}
    //     </Root>); 



    <Root>
        <AppI/> 
    </Root>;

