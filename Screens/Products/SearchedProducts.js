import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { Content, Left, Body, ListItem, Thumbnail, Text } from
'native-base';

var {width,height} = Dimensions.get('window')

const SearchedProduct = (props) => {
    const {productsFiltered} = props
    
    return (
        <Content style={{width: width}}>
            { productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem
                        onPress={() => {
                            props.navigation.navigate("Product Detail", { item: item});
                        }}
                        key = {item._id}
                        avatar
                    >
                        <Left>
                            <Thumbnail
                            source = {{uri: item.image ?
                            item.image :
                            'https://cdn.pixabay.com/photo/2016/12/05/10/07/dish-1883501_1280.png'
                            }}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                ))
                ): (
                <View style={styles.center}>
                    <Text style={{ alignSelf: 'center'}}>
                    No products match the selected criteria
                    </Text>
                </View>
            )}
        </Content>
    )
    }
    const styles = StyleSheet.create({
    center: {
    justifyContent: 'center',
    alignItems: 'center'
    }
})

export default SearchedProduct