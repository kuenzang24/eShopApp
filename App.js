import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

// Components
import Header from "./Shared/Header";

// Screens
import ProductContainer from './Screens/Products/ProductContainer';

//Navigators
import Main from "./Navigators/Main";

LogBox.ignoreAllLogs(true);

// Redux
import {Provider} from "react-redux";
import store, { Store } from './Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
      </NavigationContainer>
    </Provider>
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
