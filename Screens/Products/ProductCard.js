import React from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native'

var {width } = Dimensions.get('window')

const ProductCard = (props) => {
    const {name, price, image, countInStock} = props
    console.log(name)
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                resizeMode='contain'
                source={{uri:image?image:'https://cdn.pixabay.com/photo/2023/03/22/21/57/animal-7870631_1280.jpg'}}
            />
            <View style={styles.card}/>
            <Text style={styles.title}>
            { name.length > 15 ? name.substring(0, 15 - 3) + '...' :
            name}
            </Text>
            <Text style={styles.price}>${price}</Text>
            { countInStock > 0 ? (
                <View style={{marginBottom: 60}}>
                    <Button title='Add' color={'green'} />
                </View>
                ) : <Text style={{marginTop: 20}}>Currently Unavailable</Text>
            }
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 -30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 -90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
})
        