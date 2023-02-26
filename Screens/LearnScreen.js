import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ModuleScreen } from './ModuleScreen';
import React from 'react';

export function LearnScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Learn Home Screen</Text>
        <View>
            <Text>Completed Modules</Text>
            <Text>Introduction to Finance</Text>
        </View>
        <View>
            <Text >Upcoming Modules</Text>
            <View onPress={() => navigation.navigate('Module')}>
                <Text> Banking Accounts</Text>
                <Text>Checking Accounts</Text>
                <Text>Savings Accounts</Text>
                <Text>Money Market Accounts</Text>
            </View>
            <Text>Introduction to Finance</Text>
        </View>
        <Button
          title="Taxes"
          onPress={() => navigation.navigate('Module')}
        />
      </View>
    );
  }