import React from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { List, Content } from "native-base";

// Store
import CoffeeStore from "../../store/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../Buttons/CartButton";

const CoffeeList = () => {
  const coffeeshopList = CoffeeStore.coffeeshops.map(coffeeshop => (
    <CoffeeItem coffeeshop={coffeeshop} key={coffeeshop.id} />
  ));
  return (
    <Content>
      <List>{coffeeshopList}</List>
    </Content>
  );
};

CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerRight: <CartButton />
};

export default observer(CoffeeList);
