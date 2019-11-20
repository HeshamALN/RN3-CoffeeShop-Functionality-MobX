import React from "react";
import axios from "axios";
import { decorate, observable, computed } from "mobx";

class CartStore {
  items = [];

  addItemToCart = item => {
    try {
      this.items.push(item);
    } catch (err) {
      console.error(err.response);
    }
  };

  removeItemFromCart = item => {
    this.items.forfilter(e => {
      this.items.pop(e);
    });
  };

  checkoutCart = () => {
    this.items = [];
  };
}
decorate(CartStore, {
  items: observable
});

const cartStore = new CartStore();

export default cartStore;
