package com.tp.bakery.model;

import java.util.ArrayList;
import java.util.List;

public class Order {
    Integer orderId;
    Integer dessertId;
    Dessert bagItem;
    Integer quantity;
    Double totalPrice;


    public Order() {
    }


    public Order(Order that) {
        this.orderId = that.orderId;
        this.dessertId = that.dessertId;
        this.bagItem= that.bagItem;
        that.quantity = that.quantity;
        this.totalPrice= that.totalPrice;

    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getDessertId() {
        return dessertId;
    }

    public void setDessertId(Integer dessertId) {
        this.dessertId = dessertId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Dessert getBagItem() {
        return bagItem;
    }

    public void setBagItem(Dessert bagItem) {
        this.bagItem = bagItem;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
