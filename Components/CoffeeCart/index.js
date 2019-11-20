import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//store
import cartStore from "../../store/cartStore";

class CoffeeCart extends Component {
  state = {};
  render() {
    const cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={`${item.drink} ${item.option}`} />
    ));

    return (
      <List>
        {cartItems}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

CoffeeCart.navigationOptions = {
  title: "Cart"
};

export default CoffeeCart;
