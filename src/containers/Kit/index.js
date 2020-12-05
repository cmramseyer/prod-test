import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addKitToCart } from '../../store/actions';

import ProductKit from '../../components/ProductKit';
import Spinner from '../../components/UI/Spinner'
import Button from 'react-bootstrap/Button';

import CustomModal from '../../components/UI/CustomModal';
import axios from '../../axios';


class Kit extends Component {

  state = {
    productsKit: null,
    showProductModal: false,
    selectedProductId: null,
    selectedProduct: null,
    productsCart: [], // this is the stored cart for the entire app
    productsKitListForCart: []
  }

  
  componentDidMount = () => {
    console.log('componentDidMount')
    this.initKit();
  }

  initKit = () => {
    axios.get("/products.json")
      .then(res => {

        const products = res.data;
        const productsKit = products.map(prd => {
            prd.qty = 0
            return prd
        })

        console.log('INIT KIT')
        this.setState({productsKit: productsKit})
      })
      .catch(error => console.log(error))
  }



  handleAddKitToCart = () => {
  
    
    console.log('handleAddKitToCart')
    console.log(this.state.productsKitListForCart)
    this.props.addKitToCart(this.state.productsKitListForCart)

    
    // empty current kit selecion
    this.setState({productsKitListForCart: []})
    this.initKit();

  }

  handleClose = () => {
    this.setState({...this.state, showProductModal: false})
  }

  handleQuantityChanged = (qty, productId) => {
        console.log('handle qty changed');
        console.log(qty);
        console.log(productId);
        console.log(this.state.productsKit)

        const updatedProductsKit = this.state.productsKit.slice(0)
        console.log(updatedProductsKit)

        const productIndexOnArray = updatedProductsKit.findIndex(prd => prd.id === productId);

        const prdFromProductsKit = updatedProductsKit[productIndexOnArray];

        prdFromProductsKit.qty = Number(qty);

        updatedProductsKit[productIndexOnArray] = prdFromProductsKit;

        this.setState({productsKit: updatedProductsKit});

        console.log(updatedProductsKit)

        this.updateProductsKitListForCart();

        
  }

  updateProductsKitListForCart = () => {
    const productsKit = this.state.productsKit;

    const productsKitList = [];

    productsKit.map(prd => {
      if (prd.qty > 0) {
        for(let i = 0; i < prd.qty; i++) {
          productsKitList.push(prd)
        }
      }
    })

    console.log("ProductsKitList")
    console.log(productsKitList)

    this.setState({productsKitListForCart: productsKitList})

  }

  calculateTotalPrice = (products) => {
    console.log('calc')
    console.log(products)
    return products.reduce((a, b) => { 
      return a + b.price;
    }, 0); 
  }

  render () {

    console.log('render Kit!!!')

    let productsKitList = <Spinner></Spinner>

    console.log('prdKits')
    console.log(this.state.productsKit)

    if (this.state.productsKit) {
        productsKitList = this.state.productsKit.map(prd => {
            return <ProductKit className="col-xs-3"
                id={prd.id}
                name={prd.name}
                price={prd.price}
                quantityChanged={this.handleQuantityChanged}
                currentQty={prd.qty}

                ></ProductKit>
        });
    }

    return (
      <div className="App-body container">
          <Button variant="primary" onClick={this.handleAddKitToCart}>
              Add to Cart! Already in cart (qty: {this.props.prdsCart.length}, $: {this.calculateTotalPrice(this.props.prdsCart)})
            </Button>
            Current kit selection (qty: {this.state.productsKitListForCart.length}, $: {this.calculateTotalPrice(this.state.productsKitListForCart)})
            <div className="row">
              {productsKitList}
            </div>
          
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {
    prdsCart: state.cart.productsCart
  };
}

export default connect(mapStateToProps, { addKitToCart })(Kit);
