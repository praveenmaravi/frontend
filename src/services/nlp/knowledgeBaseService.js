// nlp/knowledgeBaseService.js

import axios from 'axios';
import { apiConfig } from '../config/apiConfig';

/**
 * Service for interacting with an AI-driven knowledge base.
 * This service retrieves knowledge base data, such as FAQs or article content,
 * and integrates with the chatbot to provide relevant responses.
 */
class KnowledgeBaseService {
  constructor() {
    this.baseUrl = apiConfig.baseUrl;  // Base URL for the knowledge base API
    this.apiKey = apiConfig.apiKey;    // API Key for authentication (if required)
  }

  /**
   * Fetches articles from the knowledge base.
   * 
   * @param {string} query - Search term for querying knowledge base.
   * @returns {Promise} - Promise object representing the search results.
   */
  async fetchArticles(query) {
    try {
      const response = await axios.get(`${this.baseUrl}/knowledge-base/search`, {
        params: { query },
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw new Error('Failed to fetch knowledge base articles.');
    }
  }

  /**
   * Fetches a specific article from the knowledge base by ID.
   * 
   * @param {string} articleId - The ID of the article to fetch.
   * @returns {Promise} - Promise object representing the article data.
   */
  async fetchArticleById(articleId) {
    try {
      const response = await axios.get(`${this.baseUrl}/knowledge-base/articles/${articleId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching article:', error);
      throw new Error('Failed to fetch the article.');
    }
  }

  /**
   * Adds a new article to the knowledge base.
   * 
   * @param {Object} articleData - The article data to add.
   * @returns {Promise} - Promise object representing the added article.
   */
  async addArticle(articleData) {
    try {
      const response = await axios.post(`${this.baseUrl}/knowledge-base/articles`, articleData, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error adding article:', error);
      throw new Error('Failed to add the article.');
    }
  }

  /**
   * Updates an existing article in the knowledge base.
   * 
   * @param {string} articleId - The ID of the article to update.
   * @param {Object} articleData - The updated article data.
   * @returns {Promise} - Promise object representing the updated article.
   */
  async updateArticle(articleId, articleData) {
    try {
      const response = await axios.put(`${this.baseUrl}/knowledge-base/articles/${articleId}`, articleData, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating article:', error);
      throw new Error('Failed to update the article.');
    }
  }

  /**
   * Deletes an article from the knowledge base.
   * 
   * @param {string} articleId - The ID of the article to delete.
   * @returns {Promise} - Promise object representing the deletion result.
   */
  async deleteArticle(articleId) {
    try {
      const response = await axios.delete(`${this.baseUrl}/knowledge-base/articles/${articleId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error deleting article:', error);
      throw new Error('Failed to delete the article.');
    }
  }
}

export default new KnowledgeBaseService();
