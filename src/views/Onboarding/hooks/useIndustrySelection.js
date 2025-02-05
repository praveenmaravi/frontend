import { useState, useEffect } from 'react';
import { fetchIndustryTemplates } from '../services/workflowService'; // Example API call

const useIndustrySelection = () => {
  // State to hold the selected industry
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  // State to hold available industries from the backend
  const [industries, setIndustries] = useState([]);
  // State for loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch available industries when the component is mounted
  useEffect(() => {
    const loadIndustries = async () => {
      setLoading(true);
      try {
        // Example API call to fetch available industries
        const response = await fetchIndustryTemplates();
        setIndustries(response.data);
      } catch (err) {
        setError('Failed to load industries');
      } finally {
        setLoading(false);
      }
    };

    loadIndustries();
  }, []);

  // Handle selection of an industry
  const handleIndustrySelect = (industry) => {
    setSelectedIndustry(industry);
  };

  // Reset the selection
  const resetSelection = () => {
    setSelectedIndustry(null);
  };

  return {
    industries,
    selectedIndustry,
    loading,
    error,
    handleIndustrySelect,
    resetSelection,
  };
};

export default useIndustrySelection;
