import React, { Component } from 'react';
import { Container, Content, Text, Button, List, Card, CardItem, Left, Body, Image, ListItem, Thumbnail, Icon, Right } from 'native-base';
import firebase from 'react-native-firebase';



export default class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props)

        this.state = {
            pets: []
        }
        // this.state = {
        //     pets: [
        //         { nome: "Mel", url: "https://cdn4.iconfinder.com/data/icons/tail-waggers/120/bows-512.png" },
        //         { nome: "Bilie", url: "https://cdn4.iconfinder.com/data/icons/tail-waggers/120/chihuahua_bone-512.png" },
        //     ]
        // }

       // this.ref = firebase.firestore().collection('pets');
    }

    componentDidMount() {
        // this.unsubscribe = this.ref.onSnapshot((query) => {
        //     const petsDoc = []
        //     query.forEach((doc) => {
        //         petsDoc.push({
        //             nome: doc.data().nome,
        //             url: doc.data.url,
        //             id = doc.id
        //         })
        //     });
        //     this.setState({ pets: petsDoc });
        // });
    }

    renderRow(pet) {
        return (
            <ListItem itemDivider={false} onPress={() => this.props.navigation.navigate('PetDetail', { pet: { nome: pet.nome, url: pet.url } })}>
                <Thumbnail square size={80} source={{ uri: pet.url }} />
                <Body>
                    <Text>{pet.nome}</Text>
                </Body>
            </ListItem>
        );
    }

    render() {
        return (
            <Container>
                <Content>
                    <List style={{ flex: 1 }} dataArray={this.state.pets}
                        renderRow={(pet) => this.renderRow(pet)}>
                    </List>

                    <Button transparent block onPress={() => this.props.navigation.navigate('PetDetail')}>
                        <Text>Adicionar</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

