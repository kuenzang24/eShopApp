import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

//Context API
import Auth from "./Context/store/Auth";

// Components
import Header from "./Shared/Header";

// Screens
import ProductContainer from "./Screens/Products/ProductContainer";

//Navigators
import Main from "./Navigators/Main";

LogBox.ignoreAllLogs(true);

// Redux
import { Provider } from "react-redux";
import store, { Store } from "./Redux/store";

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
