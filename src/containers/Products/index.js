import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions';

import ProductList from '../../components/ProductList';
import Product from '../../components/Product';
import CustomInput from '../../components/UI/CustomInput';

import CustomModal from '../../components/UI/CustomModal';
import axios from '../../axios';


class Products extends Component {

  state = {
    keyword: '',
    products: [],
    showProductModal: false,
    selectedProductId: null,
    selectedProduct: null,
    productsCart: [],
    sortedBy: '',
    sortInput: {
      sortBy: {
          elementType: 'select',
          elementConfig: {
              type: 'select',
              placeholder: '',
              options: [
                { value: 'price', displayValue: 'Sort by price' },
                { value: 'name', displayValue: 'Sort by name' }
              ]
          },
          value: ''
      }
    }
  }

  
  componentDidMount = () => {
    console.log('componentDidMount')
    axios.get("/products.json")
      .then(res => {
        this.setState({products: res.data})
      })
      .catch(error => console.log(error))
  }


 


  componentDidUpdate = (newProps, nextState) => {
    console.log('Component did update')
    console.log(nextState.selectedProductId)
    console.log(this.state.selectedProductId)
    console.log(nextState.showProductModal)
    console.log(this.state.showProductModal)
    console.log(nextState.keyword)
    console.log(this.state.keyword)


    if (this.state.selectedProductId !== nextState.selectedProductId) {
      axios.get(`/products/${this.state.selectedProductId}.json`)
      .then(res => {
        console.log(res)
        this.setState({...this.state, showProductModal: true, selectedProduct: res.data})
      })
      .catch(error => console.log(error))
    }

    if (this.state.keyword !== nextState.keyword) {
      if (this.state.keyword.length == 0) {
        axios.get("/products.json")
        .then(res => {
          this.setState({products: res.data})
        })
        .catch(error => console.log(error))
      } else {
        axios.get(`/results/?keywords=${this.state.keyword}`)
        .then(res => {
          this.setState({products: res.data})
        })
        .catch(error => console.log(error))
      }
    }

    if (this.state.sortedBy !== nextState.sortedBy) {
      axios.get("/products.json?sort_by=" + this.state.sortedBy)
        .then(res => {
          this.setState({products: res.data})
        })
        .catch(error => console.log(error))
      
    }

  }

  handleKeywordChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({...this.state, keyword: event.target.value})

  }

  handleSelectedProductId = (productId) => {

    console.log('handleSelectedProductId')
    this.setState({...this.state, selectedProductId: productId, showProductModal: true})
    
  }

  handleSortByChange = (event) => {
    console.log('hanlde sort by')
    console.log(event)
    const value = event.target.value
    console.log(value)
    this.setState({sortedBy: value})
  }


  // const [showProductModal, setShowProductModal] = useState(false);
  // const handleClose = () => setShowProductModal(false);
  // const handleShow = () => setShowProductModal(true);

  // const dispatch = useDispatch();
  // const ProductsInCart = useSelector(state => state.productsInCart)

  handleAddToCart = (productId) => {
  
    console.log('handleAdd')
    console.log(productId)
    const product = this.state.products.find(prd => prd.id === productId)
    this.props.addToCart(product);

  }

  handleClose = () => {
    console.log('handleClose')
    console.log(this.state.showModalProduct)
    this.setState({...this.state, showProductModal: false})
    console.log(this.state.showModalProduct)
    
    // dispatch(addToCart(props.selectedProductId));

  }

  render () {

    console.log('render Products!!!')

    let customModal = null;

    if (this.state.selectedProduct && this.state.showProductModal) {
      customModal = <CustomModal
          show={this.state.showProductModal}
          handleCancel={this.handleClose}
          handleOk={this.handleAddToCart }
          productId={this.state.selectedProductId}
          title="Selected product"
          cancelLabel="Cancel"
          okLabel={`Add to Cart (${this.props.prdsCart.length})`}>
          <Product 
           id={this.state.selectedProduct.id}
           name={this.state.selectedProduct.name}
           description={this.state.selectedProduct.description}
           price={this.state.selectedProduct.price}>
          </Product>
        </CustomModal>
    }

    let logSel = null;

    if (this.state.selectedProduct) {
      logSel = Object.values(this.state.selectedProduct)
    }

    return (
      <div className="App-body">
        {customModal}
        <div>
          <input type="text" className="input search-bar" placeholder="Search..." onChange={this.handleKeywordChange} />
        </div>
        <div>
          <CustomInput
          elementType={this.state.sortInput.sortBy.elementType}
          elementConfig={this.state.sortInput.sortBy.elementConfig}
          changed={this.handleSortByChange}></CustomInput>
        </div>
        <ProductList
          products={this.state.products}
          handleSelectedProductId={this.handleSelectedProductId}
          >
        </ProductList>
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {
    prdsCart: state.cart.productsCart
  };
}

//const mapDispatchToProps = dispatch => {
//  return {
//    addToCart: (prd) => dispatch(addToCart)
//  };
//}

export default connect(mapStateToProps, { addToCart })(Products);
