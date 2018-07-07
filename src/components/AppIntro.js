import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        backgroundColor: 'transparent',
        textAlign: 'justify',
        paddingHorizontal: 16,
    },
    image: {
        width: 320,
        height: 320,
    }
});


const slides = [
    {
        key: 'somethun',
        text: 'Controle as vacinas do seu melhor amigo e mantenha-o sempre protegido!',
        image: require('../assets/imagem1.png'),
        imageStyle: styles.image,
        backgroundColor: '#edb500',
    },
    {
        key: 'somethun-dos',
        text: 'Encontre petshops perto de você',
        image: require('../assets/imagem2.png'),
        imageStyle: styles.image,
        backgroundColor: '#2f89fc',
    },
    {
        key: 'somethun1',
        text: 'Agende os banhos do seu pet!',
        image: require('../assets/imagem3.png'),
        imageStyle: styles.image,
        backgroundColor: '#35477d',
    }
];

export default class AppIntro extends Component {

    constructor(props) {
        super(props)

        console.log(this.props);

    }

    componentWillReceiveProps(nextProps) {

    }

    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-arrow-round-forward"
                    color="#fff"
                    size={24}
                    style={{ backgroundColor: 'transparent', color: '#fff' }}
                />
            </View>
        );
    }
    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent', color: '#fff' }}
                />
            </View>
        );
    }

    _onDone () {
        this.props.navigation.navigate('AppLogin');
    }

    render() {
        return (
            <AppIntroSlider
                slides={slides}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                onDone={() => this._onDone()}
                />
        );
    }
}