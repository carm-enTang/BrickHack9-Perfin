import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export function ModuleScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Module Screen</Text>
        <Button
          title="Start Lesson"
          onPress={() => navigation.push('Details')}
        />
      </View>
    );
  }