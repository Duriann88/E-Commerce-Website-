//Enrico Owen (S10222581D)
"use client"
import React, { useState } from 'react';
import Footer from '@/components/Footer';
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
            name: 'Phones Junction',
            category: 'Phones',
            location: '456 Fashion Avenue, Singapore',
            description: 'Discover the latest trends in phones and accessories.',
        },
        {
            id: 3,
            name: 'Monitors Emporium',
            category: 'Monitors',
            location: '789 Bookworm Lane, Singapore',
            description: 'A paradise for monitor lovers, offering a wide selection of monitors.',
        },
        // Add more stores
        {
            id: 4,
            name: 'Earbuds Essentials',
            category: 'Earbuds',
            location: '101 Home Street, Singapore',
            description: 'Find everything you need for earbuds.',
        },
        {
            id: 5,
            name: 'Keyboards Gear',
            category: 'Keyboards',
            location: '202 Sports Avenue, Singapore',
            description: 'Get equipped with our range of keyboard gear.',
        },
    ]);

    const [filteredStores, setFilteredStores] = useState(stores);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryChange = (selectedCategory) => {
        setCategoryFilter(selectedCategory);
        filterStores(selectedCategory, searchQuery);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        filterStores(categoryFilter, query);
    };

    const filterStores = (category, query) => {
        let filtered = stores;
        if (category) {
            filtered = filtered.filter((store) => store.category === category);
        }
        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            filtered = filtered.filter(
                (store) =>
                    store.name.toLowerCase().includes(lowerCaseQuery) ||
                    store.description.toLowerCase().includes(lowerCaseQuery)
            );
        }
        setFilteredStores(filtered);
    };

    const openInMaps = (location) => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
    };

    return (
        <>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Available Stores in Singapore</h1>
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                Explore the diverse range of stores located throughout Singapore. Find
                your nearest stores for an in-person shopping experience.
            </p>

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="category" style={{ marginRight: '10px' }}>Filter by Category:</label>
                <select
                    id="category"
                    value={categoryFilter}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    style={{ fontSize: '16px', padding: '5px', borderRadius: '4px' }}
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

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="search" style={{ marginRight: '10px' }}>Search:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search for a store..."
                    onChange={(e) => handleSearch(e.target.value)}
                    value={searchQuery}
                    style={{ fontSize: '16px', padding: '5px', borderRadius: '4px', width: '100%' }}
                />
            </div>

            <ul style={{ listStyle: 'none', padding: '0' }}>
                {filteredStores.map((store) => (
                    <li key={store.id} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '20px', marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{store.name}</h2>
                        <p style={{ marginBottom: '5px' }}>
                            <strong>Category:</strong> {store.category}
                        </p>
                        <p style={{ marginBottom: '5px' }}>
                            <strong>Location:</strong>
                            <button
                                style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                                onClick={() => openInMaps(store.location)}
                            >
                                {store.location}
                            </button>
                        </p>
                        <p style={{ fontSize: '14px' }}>{store.description}</p>
                    </li>
                ))}
            </ul>
        </div>
        <Footer />
        </>
    );
};

export default StoresPage;
