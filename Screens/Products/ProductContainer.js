import React,{useState,useEffect} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import ProductList from './ProductList'

const data = require('../../assets/data/products.json');

const ProductContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data)
        return () => {
            setProducts([])
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text> Product Container</Text>
                <View style={styles.listContainer}>
                    <FlatList 
                        numColumns={2}
                        data={products}
                        renderItem={({item}) => (<ProductList key={item.id} item={item}/>)}
                        keyExtractor={(item) => {item.name}}
                    />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro',
    },
    listContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: 'gainsboro',
    },
})
    

export default ProductContainer;