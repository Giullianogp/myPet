import React, { Component } from 'react';
import { Container, Content, Text, Button, List, Card, CardItem, Left, Body, Image, ListItem, Thumbnail, Icon, Right, View } from 'native-base';
import firebase from 'react-native-firebase';



export default class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props)
        this.ref = firebase.firestore().collection('pets');
        this.unsubscribe = null;

        this.state = {
            loading: true,
            pets: []
        };

    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {
        const pets = [];
        querySnapshot.forEach((produto) => {
            const { nome, nascimento, url } = produto.data();
            pets.push({
                nome,
                nascimento,
                url
            });
        });
        this.setState({
            loading: false,
            pets
        });

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
                    <View style={{ flex: 1 }}>
                        <List style={{ flex: 1 }} dataArray={this.state.pets}
                            renderRow={(pet) => this.renderRow(pet)}>
                        </List>

                        <Button transparent block onPress={() => this.props.navigation.navigate('PetDetail')}>
                            <Text>Adicionar</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

