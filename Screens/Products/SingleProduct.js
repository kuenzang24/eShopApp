import { useLayoutEffect } from "react";
import {
    Image,
    View,
    StyleSheet,
    Button,
    Text,
    Dimensions,
} from "react-native";

import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";

const { width, height } = Dimensions.get("window");

function SingleProduct(props) {
    let product = props.route.params.item;

    return (
        <View style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <Image
                style={styles.image}
                source={{
                uri: product.image
                ? product.image
                :
                "https://cdn.pixabay.com/photo/2023/03/22/21/57/animal-7870631_1280.jpg",
                }}
                />

                </View>
                    <View style={styles.productDetails}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productBrand}>{product.brand}</Text>
                    </View>
                <View style={styles.productButton}>
                
                <Text style={styles.productPrice}>Nu.{product.price.toFixed(2)}</Text>
                <Button title="Add"  onPress={() => props.addItemToCart(product)} />
            </View>
        </View>
    );
}

const mapToDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) =>
        dispatch(actions.addToCart({ quantity: 1, product })),
    };
};

export default connect(null, mapToDispatchToProps)(SingleProduct);

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "space-evenly",
    },
    imageContainer: {
        width: width,
        height: height / 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    productDetails: {
        justifyContent: "center",
        alignItems: "center",
    },
    productButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    productName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    productBrand: {
        fontWeight: "bold",
    },
    productPrice: {
        color: "orange",
        fontSize: 18,
    },
});