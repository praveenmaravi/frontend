// src/views/Marketplace/components/ModalMarketplaceItem.js

import React, { useState } from "react";
import { Modal } from "react-modal";  // Assuming you're using a library like 'react-modal'
import { useIntegrationService } from "../../services/integrationService";
import PropTypes from "prop-types";

// This modal will display details for a specific marketplace item
const ModalMarketplaceItem = ({ isOpen, onClose, item }) => {
  const { addIntegration } = useIntegrationService();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddIntegration = async () => {
    try {
      setLoading(true);
      setError(null);
      // Simulating the integration adding process
      await addIntegration(item.id); 
      setLoading(false);
      onClose();  // Close modal after successful addition
    } catch (err) {
      setLoading(false);
      setError("Failed to add integration. Please try again.");
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>{item.name}</h2>
        </div>
        
        <div className="modal-body">
          <div className="item-description">
            <p>{item.description}</p>
          </div>
          
          <div className="item-details">
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> {item.price}</p>
            {/* Add any other relevant item details here */}
          </div>
        </div>

        <div className="modal-footer">
          {error && <p className="error-message">{error}</p>}
          <button 
            className="btn-add" 
            onClick={handleAddIntegration}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add to Chatbot"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

ModalMarketplaceItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalMarketplaceItem;
