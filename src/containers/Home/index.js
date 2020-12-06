import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions';

import ProductList from '../../components/ProductList';
import Product from '../../components/Product';
import ItemsList from '../../components/ItemsList';
import Item from '../../components/Item';
import CustomInput from '../../components/UI/CustomInput';

import CustomModal from '../../components/UI/CustomModal';
import axios from '../../axios';


class Home extends Component {

  state = {
    keyword: '',
    items: [],
    showModal: false,
    selectedItem: null,
    selectedItemType: null,
    selectedItemId: null,
    productsCart: [],
    page: 1,
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
    
  }

  componentDidUpdate = (newProps, nextState) => {
    console.log('Component did update')
    console.log(nextState.selectedProductId)
    console.log(this.state.selectedProductId)
    console.log(nextState.showProductModal)
    console.log(this.state.showProductModal)
    console.log(nextState.keyword)
    console.log(this.state.keyword)


    if (this.state.keyword !== nextState.keyword) {
      if (this.state.keyword.length != 0) {
        axios.get(`/results/?keywords=${this.state.keyword}?sort_by=${this.state.sortedBy}`)
        .then(res => {
          this.setState({items: res.data})
        })
        .catch(error => console.log(error))
      } 
    }

  }

  handleLoadMore = () => {
    this.setState({page: this.state.page + 1})
  }

  handleKeywordChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({...this.state, keyword: event.target.value})

  }

  handleSelectedItem = (itemType, id) => {

    console.log('handleSelectedItem')
    console.log(itemType)
    console.log(id)

    const items = this.state.items;
    const itemsFilteredByType = items.filter(i => Object.keys(i)[0] === itemType);
    const selectedItem = itemsFilteredByType.find(i => i[itemType].id === id)
    this.setState({selectedItemType: itemType, selectedItemId: id, selectedItem: selectedItem[itemType], showModal: true});
    
  }

  handleSortByChange = (event) => {
    console.log('hanlde sort by')
    console.log(event)
    const value = event.target.value
    console.log(value)
    this.setState({sortedBy: value})
  }


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

    console.log('render Home!!!')

    let customModal = null;

    if (this.state.selectedItem && this.state.showModal) {
      customModal = <CustomModal
          show={this.state.showModal}
          handleCancel={this.handleClose}
          handleOk={this.handleAddToCart }
          itemId={this.state.selectedItemId}
          title="Selected product"
          cancelLabel="Cancel"
          okLabel={`Add to Cart (${this.props.prdsCart.length})`}>
          <Item 
            itemType={this.state.selectedItemType} 
            item={this.state.selectedItem}
            handleSelectedItem={this.handleSelectedItem}> 
          </Item>
        </CustomModal>
    }

    return (
      <div className="App-body">
        <span onClick={this.handleLoadMore}>Load More</span>
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
        <ItemsList
          items={this.state.items}
          handleSelectedItem={this.handleSelectedItem}
          >
        </ItemsList>
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

export default connect(mapStateToProps, { addToCart })(Home);
