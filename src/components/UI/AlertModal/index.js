import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const alertModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={props.handleCancel}>
              {props.okLabel}
            </Button>
          </Modal.Footer>
        </Modal>
    )
}

export default alertModal;