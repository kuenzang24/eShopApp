import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

// Components
import Header from "./Shared/Header";

// Screens
import ProductContainer from './Screens/Products/ProductContainer';

//Navigators
import Main from "./Navigators/Main";

LogBox.ignoreAllLogs(true)
export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Main />
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
