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
        {
            id: 3,
            name: 'Bookworm Emporium',
            category: 'Books',
            location: '789 Bookworm Lane, Singapore',
            description: 'A paradise for book lovers, offering a wide selection of books.',
        },
        // Add more stores
        {
            id: 4,
            name: 'Home Essentials',
            category: 'Home Goods',
            location: '101 Home Street, Singapore',
            description: 'Find everything you need to decorate and furnish your home.',
        },
        {
            id: 5,
            name: 'Sporty Gear',
            category: 'Sports',
            location: '202 Sports Avenue, Singapore',
            description: 'Get equipped for your favorite sports activities with our range of gear.',
        },
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

    const openInMaps = (location) => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Available Stores in Singapore</h1>
            <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                Explore the diverse range of stores located throughout Singapore. Find
                your nearest stores for an in-person shopping experience.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                {/* Filter and search inputs */}
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
    );
};

export default StoresPage;






