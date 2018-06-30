import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text } from 'native-base';


export default class Cadastro extends Component {

    static navigationOptions = {
        title: 'Bem-Vindo'
    };

    constructor(props) {
        super(props)
    }

    navigateToEntrar() {

    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nome</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Senha</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button style={styles.buttonCadastrar} block>
                        <Text> Cadastrar </Text>
                    </Button>
                    <Text style={styles.dividerText}> ou </Text>
                    <Button style={styles.buttonEntrar} block>
                        <Text> Entrar </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    buttonCadastrar: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#6639A6'
    },
    buttonEntrar: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#3990DE'
    },
    dividerText: {
        marginTop: 10,
        textAlign: 'center'
    }
});
