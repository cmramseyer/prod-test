import React, { useState, useContext } from 'react';
import ProductList from '../ProductList';
import SelectedProduct from '../SelectedProduct';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from '../UserContext'
import { useDispatch, useSelector } from 'react-redux'
import { cartReducer } from '../Reducers/cartReducers'
import { addToCart } from '../Actions/index';


function Body(props) {

  const [showProductModal, setShowProductModal] = useState(false);
  const handleClose = () => setShowProductModal(false);
  const handleShow = () => setShowProductModal(true);

  const [user, toggle, setToggle] = useContext(UserContext)

  const [searchKeywords, setSearchKeywords] = useState("");

  const dispatch = useDispatch();
  const ProductsInCart = useSelector(state => state.productsInCart)

  function handleSearchKeyword(e){
    setSearchKeywords(e.target.value);
    console.log("search keywords value");
    console.log(searchKeywords);
  }

  function handleAddToCart() {
    //console.log(`lala ${props.selectedProductId}`);
    //console.log(`lala2 ${productsInCart}`);
    //setProductsInCart([...productsInCart, props.selectedProductId]);
    //console.log("CART!");
    //console.log(productsInCart);

    dispatch(addToCart(props.selectedProductId));

  }


  
    return (
      <div className="App-body">

    <p>{ProductsInCart} size {ProductsInCart}</p>

        <Modal show={showProductModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SelectedProduct 
              selectedProductId={props.selectedProductId}
              >

            </SelectedProduct>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to cart
            </Button>
          </Modal.Footer>
        </Modal>


        <div>
          <input type="text" className="input search-bar" placeholder="Search..." onChange={handleSearchKeyword} />
        </div>

          <p>
              Body
          </p>
          <a
              className="App-link"
              href="#"
              onClick={() => props.setCounter(props.counter + 1)}
              rel="noopener noreferrer"
          >
              Click here
          </a>
          <p>clicked {props.counter} times</p>
          
          <ProductList 
            setSelectedProductId={props.setSelectedProductId}
            setShowProductModal={setShowProductModal}
            searchKeywords={searchKeywords}
            >
            

          </ProductList>
      </div>
    );
}

export default Body;
