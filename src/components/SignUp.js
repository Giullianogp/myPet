import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text, Icon, View } from 'native-base';


export default class Cadastro extends Component {

    static navigationOptions = {
        title: 'Bem-Vindo'
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form style={{ marginRight: 10 }}>
                        <Item floatingLabel>
                            <Label>Nome</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Senha</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button style={styles.buttonCadastrar} block onPress={() => this.props.navigation.navigate('App')}>
                        <Text> Cadastrar </Text>
                    </Button>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <Button style={styles.buttonGoogle} bordered block iconLeft>
                            <Icon name='logo-google' style={{ color: '#FF3E30' }} />
                            <Text style={{ color: '#FF3E30' }}>Google</Text>
                        </Button>
                        <Button style={styles.buttonFacebook} bordered block iconLeft >
                            <Icon name='logo-facebook' style={{ color: '#3C5898' }} />
                            <Text style={{ color: '#3C5898' }}>Facebook</Text>
                        </Button>
                    </View>
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <Text style={styles.dividerText}> Já possui conta? </Text>
                        <View style={styles.separatorLine} />
                    </View>

                    <Button style={styles.buttonEntrar} bordered block onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text style={{ color: '#6639A6' }}> Entrar </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    buttonCadastrar: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#6639A6"
    },
    buttonEntrar: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: "#6639A6"
    },
    buttonGoogle: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        borderColor: "#FF3E30"
    },
    buttonFacebook: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        borderColor: "#3C5898"
    },
    separatorContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20,
        marginLeft: 10,
        marginRight: 10
    },
    separatorLine: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: '#9B9FA4'
    },
    separatorOr: {
        color: '#9B9FA4',
        marginHorizontal: 8
    },
});
