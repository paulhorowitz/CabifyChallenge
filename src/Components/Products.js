import React from 'react';
import shirt from '../img/shirt.png'
import mug from '../img/mug.png'
import cap from '../img/cap.png'

class Products extends React.Component {
    render() {
        return (
            <div>
                  <section class="products">
                        <h1 class="main">Shopping cart</h1>
                        <ul class="products-list tableHead">
                          <li class="products-list-title row">
                            <div class="col-product">Product details</div>
                            <div class="col-quantity">Quantity</div>
                            <div class="col-price">Price</div>
                            <div class="col-total">Total</div>
                          </li>
                        </ul>
                        <ul class="products-list">
                          <li class="product row">
                            <div class="col-product">
                              <figure class="product-image">
                                <img src={shirt} alt="Shirt" />
                                <div class="product-description">
                                  <h1>Shirt</h1>
                                  <p class="product-code">Product code X7R2OPX</p>
                                </div>
                              </figure>
                            </div>
                            <div class="col-quantity">
                              <button class="count">-</button
                              ><input type="text" class="product-quantity" value="3" /><button
                                class="count"
                              >
                                +
                              </button>
                            </div>
                            <div class="col-price">
                              <span class="product-price">20</span
                              ><span class="product-currency currency">€</span>
                            </div>
                            <div class="col-total">
                              <span class="product-price">60</span
                              ><span class="product-currency currency">€</span>
                            </div>
                          </li>
                          <li class="product row">
                            <div class="col-product">
                              <figure class="product-image">
                                <img src={mug} alt="Mug" />
                                <div class="product-description">
                                  <h1>Mug</h1>
                                  <p class="product-code">Product code X2G2OPZ</p>
                                </div>
                              </figure>
                            </div>
                            <div class="col-quantity">
                              <button class="count">-</button
                              ><input type="text" class="product-quantity" value="4" /><button
                                class="count"
                              >
                                +
                              </button>
                            </div>
                            <div class="col-price">
                              <span class="product-price">5</span
                              ><span class="product-currency currency">€</span>
                            </div>
                            <div class="col-total">
                              <span class="product-price">20</span
                              ><span class="product-currency currency">€</span>
                            </div>
                          </li>
                          <li class="product row">
                            <div class="col-product">
                              <figure class="product-image">
                                <img src={cap} alt="Cap" />
                                <div class="product-description">
                                  <h1>Cap</h1>
                                  <p class="product-code">Product code X3W2OPY</p>
                                </div>
                              </figure>
                            </div>
                            <div class="col-quantity">
                              <button class="count">-</button
                              ><input type="text" class="product-quantity" value="4" /><button
                                class="count"
                              >
                                +
                              </button>
                            </div>
                            <div class="col-price">
                              <span class="product-price">10</span
                              ><span class="product-currency currency">€</span>
                            </div>
                            <div class="col-total">
                              <span class="product-price">40</span
                              ><span class="product-currency currency">€</span>
                            </div>
                          </li>
                        </ul>
                      </section>
                )
            </div>
        )
    }
}

export default Products;