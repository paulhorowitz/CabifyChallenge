import React from 'react';
import './App.css';
import Products from './Components/Products'
import ProductList from './Components/ProductList'

class App extends React.Component {
  constructor(props) {
    super(props);
}
  render() {
    return (
      <div id="root">
      <main class="App">
        <Products />
        <ProductList />
      </main>
    </div>
    )
  }
}


export default App;