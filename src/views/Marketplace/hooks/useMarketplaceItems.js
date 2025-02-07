import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMarketplaceItems, setLoading, setError } from '../../store/marketplaceSlice';
import { fetchMarketplaceItems } from '../../../services/api/marketplaceAPI';

/**
 * Custom hook to fetch marketplace items and handle pagination, filtering, and sorting.
 */
const useMarketplaceItems = (category = '', searchQuery = '', sortBy = '', page = 1, pageSize = 10) => {
  const dispatch = useDispatch();
  const [loading, setLoadingState] = useState(false);
  const [error, setErrorState] = useState(null);
  const [pagination, setPagination] = useState({ page, pageSize });

  useEffect(() => {
    // Set loading state to true when fetching starts
    setLoadingState(true);
    setErrorState(null);

    const fetchItems = async () => {
      try {
        // Fetch items from the API, passing the necessary query parameters
        const data = await fetchMarketplaceItems({ category, searchQuery, sortBy, page, pageSize });

        // Dispatch action to store the fetched data
        dispatch(setMarketplaceItems(data.items));

        // Set pagination info (total items, current page, etc.)
        setPagination({
          page: data.page,
          pageSize: data.pageSize,
          totalItems: data.totalItems,
        });
      } catch (err) {
        setErrorState('Failed to fetch marketplace items');
        dispatch(setError('Failed to fetch marketplace items'));
      } finally {
        setLoadingState(false);
      }
    };

    fetchItems();
  }, [category, searchQuery, sortBy, page, pageSize, dispatch]);

  return { loading, error, items: pagination.totalItems > 0 ? pagination : null };
};

export default useMarketplaceItems;
