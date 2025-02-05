// frontend/src/router/routes/marketplace.js

import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you are using Redux for state management
import MarketplacePage from '../../views/MarketplacePage'; // Your view for the marketplace
import { authGuard } from '../guards/authGuard'; // Assuming you have an auth guard to protect the route

const MarketplaceRoute = () => {
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector(state => state.auth.user); // Get the user state

    useEffect(() => {
        // Add any necessary logic to fetch marketplace data or check if the user has access
        setIsLoading(false); // Set loading to false after data is ready
    }, []);

    // Check if user is authenticated using the authGuard
    if (isLoading) {
        return <div>Loading...</div>; // You can show a loading spinner here
    }

    // If user is not authenticated, redirect to login page
    if (!user) {
        return <Redirect to="/authentication" />;
    }

    return (
        <Route
            path="/marketplace"
            render={(props) => <MarketplacePage {...props} />}
        />
    );
};

export default MarketplaceRoute;
