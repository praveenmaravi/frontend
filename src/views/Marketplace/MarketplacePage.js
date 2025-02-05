import React, { useState } from "react";
import MarketplaceContainer from "./MarketplaceContainer";
import MarketplaceList from "./MarketplaceList";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import SortOptions from "./components/SortOptions";
import Pagination from "./components/Pagination";
import "./styles/marketplace.css";

const MarketplacePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("popular");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    return (
        <MarketplaceContainer>
            <div className="marketplace-page">
                <h1 className="marketplace-title">Marketplace</h1>
                <div className="marketplace-controls">
                    <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />
                    <SortOptions value={sortOption} onChange={setSortOption} />
                </div>
                <MarketplaceList 
                    searchQuery={searchQuery} 
                    selectedCategory={selectedCategory} 
                    sortOption={sortOption} 
                    currentPage={currentPage} 
                    itemsPerPage={itemsPerPage} 
                />
                <Pagination 
                    currentPage={currentPage} 
                    onPageChange={setCurrentPage} 
                />
            </div>
        </MarketplaceContainer>
    );
};

export default MarketplacePage;
