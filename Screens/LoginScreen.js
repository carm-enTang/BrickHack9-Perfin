import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ModuleScreen } from './ModuleScreen';
import { LearnScreen } from './LearnScreen';


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });


export function LoginScreen({ navigation }) {


    const [username, onChangeUserName] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Image
        style={styles.tinyLogo}
        source={require('../assets/perfin_logo.png')}
      /> */}
        <Text>Login Screen</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />
        <Button
          title="Log In"
          onPress={() => navigation.navigate('Learn')}
        />
      </View>
    );
  }