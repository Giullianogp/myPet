import { CadastroScreen, HomeScreen, LoginScreen } from '../src/Views';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
    {
        Cadastro: CadastroScreen,
        Login: LoginScreen,
        Home: HomeScreen
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

