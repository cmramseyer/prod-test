import React, { useState } from 'react';
import ProductList from '../ProductList';
import SelectedProduct from '../SelectedProduct';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Body(props) {

  const [showProductModal, setShowProductModal] = useState(false);

  const handleClose = () => setShowProductModal(false);
  const handleShow = () => setShowProductModal(true);


  
    return (
      <div className="App-body">

        <Modal show={showProductModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SelectedProduct selectedProductId={props.selectedProductId}></SelectedProduct>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add to cart
            </Button>
          </Modal.Footer>
        </Modal>

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
            setShowProductModal={setShowProductModal}>

          </ProductList>
      </div>
    );
}

export default Body;
