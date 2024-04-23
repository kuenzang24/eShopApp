import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from
"native-base";

const CartItem = (props) => {
    const data = props.item.item.product;
    // console.log(props.item.item.product.image);

    const [quantity, setQuantity] = useState(props.item.item.quantity);
    return (
        <ListItem style={styles.listItem} key={Math.random()} avatar>
            <Left>
                <Thumbnail
                    source={{
                    uri: data.image
                    ? data.image
                    :
                    "https://cdn.pixabay.com/photo/2016/12/05/10/07/dish-1883501_1280.png",
                    }}
                />
            </Left>
            <Body style={styles.body}>
                <Left>
                    <Text>{data.name}</Text>
                </Left>
                <Right>
                    <Text>$ {data.price}</Text>
                </Right>
            </Body>
        </ListItem>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    listItem: {
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
    },
    body: {
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
    },
});