// src/components/Product/ProductConfirmationModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductConfirmationModal = ({ show, onHide, onConfirm }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Confirmation</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to proceed?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      <Button variant="primary" onClick={onConfirm}>
        Confirm
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ProductConfirmationModal;
