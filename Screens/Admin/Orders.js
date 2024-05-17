import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import OrderCard from "../../Shared/OrderCard";

const Orders = (props) => {
  const [orderList, setOrderList] = useState();
  useEffect(() => {
    getOrders();
    return () => {
      setOrderList();
    };
  }, []);

  const getOrders = () => {
    axios
      .get(`${baseURL}order`)
      .then((x) => {
        setOrderList(x.data.data.orderList);
      })
      .catch((error) => console.log(error));
  };
  return (
    <View>
      <FlatList
        data={orderList}
        renderItem={({ item }) => (
          <OrderCard navigation={props.navigation} {...item} editMode={true} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Orders;
