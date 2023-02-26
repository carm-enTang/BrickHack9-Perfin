import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { LoginScreen } from './Screens/LoginScreen';
import { LearnScreen } from './Screens/LearnScreen';
import { ModuleScreen } from './Screens/ModuleScreen';
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();



export default function App() {

  const handlePress = () => {
    console.log("Text pressed")
  }


  return (
    // <SafeAreaView style={styles.container}>
    // <Text>Hello World!</Text>
    // <Text onpress={handlePress}>This acts as a button</Text>
    //   <StatusBar style="auto" />
    // </SafeAreaView>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In" component={LoginScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} />
        <Stack.Screen name="Module" component={ModuleScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
