import React, { Component } from 'react';
import { Image } from 'react-native'
import { Container, Content, Form, Item, Label, Input, Button, Text, Icon, View } from 'native-base';


export default class PetDetail extends Component {

    static navigationOptions = {
        title: this.props ? this.props.pet.nome : "Cadastro"
    };

    constructor(props) {
        super(props)
    }

    consultarPet(petId) {


        this.state = {

        }
    }

    render() {

        const { navigation } = this.props;
        const petId = navigation.getParam('id', null);

        if (petId != null) {
            this.consultarPet(petId);
        }


        return (
            <Container>
                <Content>
                    <Image source={{ url: "https://cdn4.iconfinder.com/data/icons/tail-waggers/120/chihuahua_bone-512.png" }}></Image>
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
                </Content>
            </Container>
        );
    }
}

