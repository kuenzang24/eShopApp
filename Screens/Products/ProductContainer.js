import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Dimensions,ActivityIndicator } from "react-native";
import ProductList from "./ProductList";
import {
  Container,
  Header,
  Icon,
  Item,
  Input,
  Text,
} from "native-base";
import SearchedProduct from "./SearchedProducts";
import Banner from "../../Shared/Banner";
import CategoryFilter from "./CategoryFilter";
import { ScrollView } from "react-native";

// Backend connection
import baseURL from "../../assets/common/baseUrl";
import axios from "axios";

var { height } = Dimensions.get("window");
const data = require("../../assets/data/products.json");
const productCategories = require("../../assets/data/categories.json");

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [productsCtg, setProductsCtg] = useState([]);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFocus(false);
    setActive(-1);

    // Products
    axios
      .get(`${baseURL}product`)
      .then((res) => {
        setProducts(res.data.data);
        setProductsFiltered(res.data.data);
        setProductsCtg(res.data.data);
        setInitialState(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        console.log("API call error");
      });

    // Categories
    axios
      .get(`${baseURL}category`)
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("API call error");
      });

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive();
      setInitialState([]);
      setProductsCtg([]);
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  //Categories
  const changeCtg = (ctg) => {
    // {
    //     ctg === 'all'
    //         ? [setProductsCtg(initialState), setActive(true)]
    //         : [
    //             setProductsCtg(
    //                 products.filter((i) => i.category._id.$oid ===
    //                 ctg),
    //                 setActive(true)
    //             )
    //         ]
    // }

    if (ctg === "all") {
      setProductsCtg(initialState);
    } else {
      setProductsCtg(products.filter((i) => i.category._id === ctg));
    }

    setActive(true);
  };

  return (
    <>
      {loading === false ? (
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon name="search-outline" />
              <Input
                placeholder="Search"
                onFocus={openList}
                onChangeText={(text) => searchProduct(text)}
              />
              {focus == true ? <Icon onPress={onBlur} name="Close" /> : null}
            </Item>
          </Header>
          {focus == true ? (
            <SearchedProduct
              navigation={props.navigation}
              productsFiltered={productsFiltered}
            />
          ) : (
            <ScrollView>
              <View>
                {/* <Text> Product Containers</Text> */}
                <View>
                  <Banner />
                </View>
                <View>
                  <CategoryFilter
                    categories={categories}
                    categoryFilter={changeCtg}
                    productsCtg={productsCtg}
                    active={active}
                    setActive={setActive}
                  />
                </View>
                {productsCtg.length > 0 ? (
                  <View style={styles.listContainer}>
                    {productsCtg.map((item) => {
                      return (
                        <ProductList
                          navigation={props.navigation}
                          key={item._id}
                          item={item}
                        />
                      );
                    })}
                    {/* <FlatList
                                      numColumns={2}
                                      data={products}
                                      renderItem={({ item }) => (
                                      <ProductList key={item.id} item={item} />
                                      )}
                                      keyExtractor={(item) => item.name}
                                      /> */}
                  </View>
                ) : (
                  <View style={[styles.center, { height: height / 2 }]}>
                    <Text>No products found</Text>
                  </View>
                )}
              </View>
            </ScrollView>
          )}
        </Container>
      ) : (
        //loading
        <Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
          <ActivityIndicator size="large" color="red" />
        </Container>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductContainer;
