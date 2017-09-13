import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';


class ContactCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View>
                <Card
                    title='HELLO WORLD'
                    image={require('C:\Users\Shagun Mistry\Documents\Things\MyWebsites\ChallengeMe_Test\pics\paintRedInside.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        This is just a test Contact Card
                    </Text>
                    <Button
                        icon={{ name: 'code' }}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
    },
});

export default ContactCard;