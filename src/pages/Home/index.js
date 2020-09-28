import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Title,
  Input,
  ButtonContainer,
  Button,
  BtnText,
  DataButton,
  DataBtnText,
  DelButton,
  DelBtnText,
} from './styles';

const Home = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  async function saveData() {
    const user = {
      name,
      age,
    };

    await AsyncStorage.setItem('user', JSON.stringify(user));
  }

  async function showUser() {
    const userJson = await AsyncStorage.getItem('user');
    const user = JSON.parse(userJson);

    if (!user) {
      Alert.alert(
        'User Infos',
        `Don't find user's info!`
      );
    }

    Alert.alert(
      'User Infos',
      `Name: ${user.name} - Age: ${user.age}`
    );
  }

  async function deleteUser() {
    await AsyncStorage.removeItem('user')
  }

  return (
    <Container>
      <Title>Async Storage - RN</Title>

      <Input
        value={name}
        placeholder='Type your name'
        placeholderTextColor='#eee'
        onChangeText={text => setName(text)}
      />

      <Input
        value={age}
        placeholder='Type your age'
        placeholderTextColor='#eee'
        onChangeText={text => setAge(text)}
      />

      <Button onPress={saveData}>
        <BtnText>Save</BtnText>
      </Button>

      <ButtonContainer>
        <DataButton onPress={showUser}>
          <DataBtnText>💾</DataBtnText>
        </DataButton>

        <DelButton onPress={deleteUser}>
          <DelBtnText>🗑</DelBtnText>
        </DelButton>
      </ButtonContainer>
    </Container>
  );
};

export default Home;
