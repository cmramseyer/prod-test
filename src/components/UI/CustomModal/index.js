import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const customModal = (props) => {
    console.log('Render Modal')
    console.log('props.show')
    console.log(props.show);

    return (
        <Modal show={props.show} onHide={props.handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleCancel}>
              {props.cancelLabel}
            </Button>
            <Button variant="primary" onClick={() => props.handleOk(props.itemId)}>
              {props.okLabel}
            </Button>
          </Modal.Footer>
        </Modal>
    )
}

export default customModal;