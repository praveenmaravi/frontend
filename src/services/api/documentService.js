// api/documentService.js

import apiClient from './apiClient'; // Assuming apiClient is set up with Axios or Fetch

// Function to upload a document
export const uploadDocument = async (file, metadata) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('metadata', JSON.stringify(metadata));

    const response = await apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data; // Returning the response from the server (e.g., file URL, processing status)
  } catch (error) {
    throw new Error(`Error uploading document: ${error.response?.data?.message || error.message}`);
  }
};

// Function to process a document (e.g., OCR or text extraction)
export const processDocument = async (documentId) => {
  try {
    const response = await apiClient.post(`/process/${documentId}`);

    return response.data; // Returning the result of the document processing (e.g., extracted text)
  } catch (error) {
    throw new Error(`Error processing document: ${error.response?.data?.message || error.message}`);
  }
};

// Function to get a document's status or details
export const getDocumentStatus = async (documentId) => {
  try {
    const response = await apiClient.get(`/document/status/${documentId}`);

    return response.data; // Returning the status or details of the document (e.g., processed or pending)
  } catch (error) {
    throw new Error(`Error fetching document status: ${error.response?.data?.message || error.message}`);
  }
};

// Function to delete a document
export const deleteDocument = async (documentId) => {
  try {
    const response = await apiClient.delete(`/document/${documentId}`);

    return response.data; // Returning success message or confirmation
  } catch (error) {
    throw new Error(`Error deleting document: ${error.response?.data?.message || error.message}`);
  }
};
