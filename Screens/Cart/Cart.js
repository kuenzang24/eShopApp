import { View, Dimensions, StyleSheet, TouchableOpacity  } from "react-native";
import { Icon } from "react-native-vector-icons/FontAwesome";
import {
    Container,
    Text,
    Left,
    Right,
    H1,
    ListItem,
    Thumbnail,
    Body,
} from "native-base";


import { connect} from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";

var { height, width } = Dimensions.get("window");

const Cart = (props) => {
    return (
        <>
            {props.cartItems.length ? (
                <Container>
                    <H1 style={{ alignSelf: "center" }}>Cart</H1>
                    {props.cartItems.map((data) => {
                        return (
                            <ListItem style={styles.listItem} key={Math.random()} avatar>
                                <Left>
                                    <Thumbnail
                                        source={{
                                            uri: data.product.image
                                            ? data.product.image
                                            :
                                            "https://cdn.pixabay.com/photo/2016/12/05/10/07/dish-1883501_1280.png",
                                        }}
                                    />
                                </Left>
                                <Body style={styles.body}>
                                    <Left>
                                        <Text>{data.product.name}</Text>
                                    </Left>
                                    <Right>
                                        <Text>$ {data.product.price}</Text>
                                    </Right>
                                </Body>
                            </ListItem>
                        );
                    })}
                </Container>
                ) : (
                <Container style={styles.emptyContainer}>
                <Text> Looks like your cart is empty</Text>
                <Text>Add products to your cart to get started</Text>
                </Container>
            )}
        </>
    );
};


const styles = StyleSheet.create({
    emptyContainer: {
        height: height,
        alignItems: "center",
        justifyContent: "center",
    },
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

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems,
    };
};

export default connect(mapStateToProps, null)(Cart);