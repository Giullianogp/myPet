import React from 'react';
import { Text, Body, ListItem, Thumbnail } from 'native-base';


const CardPet = (props) => {
    return (
        <ListItem itemDivider={false} onPress={() => this.props.navigation.navigate('PetDetail', { pet: { nome: this.props.nome, url: this.props.url } })}>
            <Thumbnail square size={80} source={{ uri: props.url }} />
            <Body>
                <Text>{props.nome}</Text>
            </Body>
        </ListItem>
    )
}

export default CardPet;

