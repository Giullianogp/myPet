import { SignIn, SignUp, Home, PetDetail } from '../src/components';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Toast } from 'native-base'

import firebase from 'react-native-firebase';

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

export default createSwitchNavigator(
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

