import React from "react";
import MarketplaceItem from "./components/MarketplaceItem";
import Pagination from "./components/Pagination";
import { useMarketplaceItems } from "./hooks/useMarketplaceItems";

const MarketplaceList = () => {
    const { items, isLoading, error, currentPage, totalPages, setPage } = useMarketplaceItems();

    if (isLoading) return <p>Loading marketplace items...</p>;
    if (error) return <p>Error loading items. Please try again.</p>;
    if (items.length === 0) return <p>No marketplace items found.</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {items.map((item) => (
                <MarketplaceItem key={item.id} item={item} />
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
};

export default MarketplaceList;
