import React from 'react'

class ProductList extends React.Component {
    render() {
        return (
            <div>
                <aside class="summary">
          <h1 class="main">Order Summary</h1>
          <ul class="summary-items wrapper border">
            <li>
              <span class="summary-items-number">11 Items</span
              ><span class="summary-items-price"
                >120<span class="currency">€</span></span
              >
            </li>
          </ul>
          <div class="summary-discounts wrapper-half border">
            <h2>Discounts</h2>
            <ul>
              <li><span>2x1 Mug offer</span><span>-10€</span></li>
              <li><span>x3 Shirt offer</span><span>-3€</span></li>
              <li><span>Promo code</span><span>0€</span></li>
            </ul>
          </div>
          <div class="summary-total wrapper">
            <ul>
              <li>
                <span class="summary-total-cost">Total cost</span
                ><span class="summary-total-price">107€</span>
              </li>
            </ul>
            <button type="submit">Checkout</button>
          </div>
        </aside>
            </div>
        )
    }
}

export default ProductList;