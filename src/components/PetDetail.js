import React, { Component } from 'react';
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

                </Content>
            </Container>
        );
    }
}

