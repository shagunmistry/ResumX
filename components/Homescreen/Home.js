import React, { Component } from 'react';
import { View } from 'react-native';
import ContactCard from '../Cards/ContactCard';

class Home extends Component {
  render() {
    return (
      <View>
        <ContactCard/>
      </View>
      
    );
  }
}

export default Home;