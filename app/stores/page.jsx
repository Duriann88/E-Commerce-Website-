// components/StoresPage.js
"use client";
import React, { useState } from 'react';

const StoresPage = () => {
    const [stores, setStores] = useState([
        {
            id: 1,
            name: 'Tech Haven',
            category: 'Electronics',
            location: '123 Electronics Street, Singapore',
            description: 'Your go-to store for the latest gadgets and electronics.',
        },
        {
            id: 2,
            name: 'Fashion Junction',
            category: 'Fashion',
            location: '456 Fashion Avenue, Singapore',
            description: 'Discover the latest trends in clothing and accessories.',
        },
        // Add more stores as needed
    ]);

    const [filteredStores, setFilteredStores] = useState(stores);
    const [categoryFilter, setCategoryFilter] = useState('');

    const handleCategoryChange = (selectedCategory) => {
        setCategoryFilter(selectedCategory);
        if (selectedCategory === '') {
            setFilteredStores(stores);
        } else {
            const filtered = stores.filter((store) => store.category === selectedCategory);
            setFilteredStores(filtered);
        }
    };

    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = stores.filter(
            (store) =>
                store.name.toLowerCase().includes(lowerCaseQuery) ||
                store.description.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredStores(filtered);
    };

    return (
        <div>
            <h1>Available Stores in Singapore</h1>
            <p>
                Explore the diverse range of stores located throughout Singapore. Find
                your nearest stores for an in-person shopping experience.
            </p>

            <div>
                <label htmlFor="category">Filter by Category:</label>
                <select
                    id="category"
                    value={categoryFilter}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {/* Add unique categories dynamically */}
                    {[...new Set(stores.map((store) => store.category))].map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search for a store..."
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            <ul>
                {filteredStores.map((store) => (
                    <li key={store.id}>
                        <h2>{store.name}</h2>
                        <p>
                            <strong>Category:</strong> {store.category}
                        </p>
                        <p>
                            <strong>Location:</strong> {store.location}
                        </p>
                        <p>{store.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StoresPage;
