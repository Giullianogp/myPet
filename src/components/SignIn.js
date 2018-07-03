import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Toast, Content, Form, Label, Input, Button, Text, Item } from 'native-base';
import firebase from 'react-native-firebase';

export default class Login extends Component {

    static navigationOptions = {
        title: 'Login'
    };

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            senha: '',
            isAuthenticated: false,
            showToast: false
        }

    }

    login = async () => {

        const { email, senha } = this.state;

        this.props.navigation.navigate('App');

        // if (!this.validarInfo(email, senha)) {
        //     this.toastError();
        // } else {

        //     try {
        //         const user = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, senha);

        //         this.setState({ isAuthenticated: true })

        //         this.props.navigation.navigate('App');
        //     } catch (err) {
        //         this.toastError();
        //     }
        // }
    }

    toastError() {
        Toast.show({ text: "Email ou senha inválidos", buttonText: "Ok", type: "danger" });
    }

    validarInfo(email, senha) {
        return !((email === undefined || email.length == 0) || (senha === undefined || senha.length == 0));
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input value={this.state.email}
                                onChangeText={(val) => this.setState({ email: val })} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Senha</Label>
                            <Input value={this.state.senha}
                                onChangeText={(val) => this.setState({ senha: val })} />
                        </Item>
                    </Form>
                    <Button style={styles.entrar} block onPress={this.login}>
                        <Text> Entrar </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    entrar: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#590D82'
    }
});
