import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";
import TrafficLight from "../../Shared/StyledComponents/TrafficLight";
import { Left, Right, Container, H1 } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";
import Toast from "react-native-toast-message";
import EasyButton from "../../Shared/StyledComponents/EasyButton";
const SingleProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState("");
  const [availabilityText, setAvailabilityText] = useState("");

  useEffect(() => {
    if (props.route.params.item.countInStock == 0) {
      setAvailability(<TrafficLight unavailable></TrafficLight>);
      setAvailabilityText("Unavailable");
    } else if (props.route.params.item.countInStock <= 5) {
      setAvailability(<TrafficLight limited></TrafficLight>);
      setAvailabilityText("Limited");
    } else {
      setAvailability(<TrafficLight available></TrafficLight>);
      setAvailabilityText("Available");
    }
    return () => {
      setAvailability(null);
      setAvailabilityText("");
    };
  }, []);

  return (
    <Container style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            source={{
              uri: item.image
                ? item.image
                : "https://cdn.pixabay.com/photo/2016/12/05/10/07/dish-1883501_1280.png",
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <H1 style={styles.contentHeader}>{item.name}</H1>
          <Text style={styles.contentText}>{item.brand}</Text>
        </View>
        {/* TODO: Description, Rich Description and Availability*/}
        <View style={styles.availabilityContainer}>
          <View style={styles.availability}>
            <Text style={{ marginRight: 10 }}>
              Availability: {availabilityText}
            </Text>
            {availability}
          </View>
          <Text>{item.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Left>
          <Text style={styles.price}>$ {item.price}</Text>
        </Left>
        <Right>
          {/* <Button
title="Add"
onPress={() => {
props.addItemToCart(item),
Toast.show({
topOffset: 60, //spacing on the top
type: "success", //type of the toast
text1: `${item.name} added to Cart `, //Text to Display
text2: "Go to your card to complete order",
});
}}
/> */}
          <EasyButton
            primary
            medium
            onPress={() => {
              props.addItemToCart(item),
                Toast.show({
                  topOffset: 60,
                  type: "success",
                  text1: `${item.name} added to Cart`,
                  text2: "Go to your cart to complete order",
                });
            }}
          >
            <Text style={{ color: "white" }}>Add</Text>
          </EasyButton>
        </Right>
      </View>
    </Container>
  );
};
const mapToDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};
export default connect(null, mapToDispatchToProps)(SingleProduct);
const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  imageContainer: {
    backgroundColor: "white",
    padding: 0,
    margin: 0,
  },
  image: {
    width: "100%",
    height: 250,
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentHeader: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
  },
  price: {
    fontSize: 24,
    margin: 20,
    color: "red",
  },
  availabilityContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  availability: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
