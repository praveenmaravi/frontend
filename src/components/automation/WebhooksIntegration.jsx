import React, { useState } from "react";
import { Button, InputField, Modal, Spinner } from "../ui";
import APIHelper from "../../utils/APIHelper";

const WebhooksIntegration = () => {
  const [webhookURL, setWebhookURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [webhooks, setWebhooks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Handle URL input change
  const handleWebhookURLChange = (e) => {
    setWebhookURL(e.target.value);
  };

  // Handle webhook addition
  const handleAddWebhook = async () => {
    if (!webhookURL) {
      alert("Please enter a valid webhook URL.");
      return;
    }
    setLoading(true);
    try {
      const response = await APIHelper.post("/webhooks/add", { webhookURL });
      if (response.status === 200) {
        setWebhooks([...webhooks, webhookURL]);
        setWebhookURL("");
        alert("Webhook added successfully!");
      } else {
        alert("Failed to add webhook.");
      }
    } catch (error) {
      console.error("Error adding webhook:", error);
      alert("An error occurred while adding the webhook.");
    } finally {
      setLoading(false);
    }
  };

  // Handle webhook removal
  const handleRemoveWebhook = async (url) => {
    setLoading(true);
    try {
      const response = await APIHelper.post("/webhooks/remove", { webhookURL: url });
      if (response.status === 200) {
        setWebhooks(webhooks.filter((webhook) => webhook !== url));
        alert("Webhook removed successfully!");
      } else {
        alert("Failed to remove webhook.");
      }
    } catch (error) {
      console.error("Error removing webhook:", error);
      alert("An error occurred while removing the webhook.");
    } finally {
      setLoading(false);
    }
  };

  // Open modal for webhook settings
  const openModal = () => setModalOpen(true);

  // Close modal
  const closeModal = () => setModalOpen(false);

  return (
    <div className="webhook-integration-container">
      <h2>Webhook Integrations</h2>
      <Button onClick={openModal}>Add New Webhook</Button>

      <div className="webhook-list">
        <h3>Active Webhooks</h3>
        {webhooks.length > 0 ? (
          webhooks.map((url, index) => (
            <div key={index} className="webhook-item">
              <span>{url}</span>
              <Button onClick={() => handleRemoveWebhook(url)} disabled={loading}>
                Remove
              </Button>
            </div>
          ))
        ) : (
          <p>No active webhooks. Add a webhook to integrate with external services.</p>
        )}
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h3>Add a Webhook</h3>
        <InputField
          type="url"
          label="Webhook URL"
          value={webhookURL}
          onChange={handleWebhookURLChange}
          placeholder="Enter webhook URL"
        />
        <Button onClick={handleAddWebhook} disabled={loading}>
          {loading ? <Spinner /> : "Add Webhook"}
        </Button>
      </Modal>
    </div>
  );
};

export default WebhooksIntegration;
