"use client";
import React, { useState } from 'react';

const ContactHelpPage = () => {
    const [faqItems] = useState([
        {
            id: 1,
            question: 'How can I track my order?',
            answer: 'You can track your order by visiting the Order Tracking page on our website.',
        },
        {
            id: 2,
            question: 'What is your return policy?',
            answer: 'Our return policy allows you to return items within 30 days of purchase. Please see our Returns and Exchanges page for more details.',
        },
    ]);

    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleContactFormChange = (e) => {
        setContactFormData({
            ...contactFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', contactFormData);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
            <section style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Contact Us</h1>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                    Have a question or need assistance? Feel free to reach out to our
                    customer support team.
                </p>
                <p style={{ fontSize: '16px', marginBottom: '5px' }}>
                    Email: Evolve@gmail.com
                </p>
                <p style={{ fontSize: '16px', marginBottom: '5px' }}>
                    Phone: 123-456-7890
                </p>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                    Address: 123 Street, City, Country
                </p>
                <form onSubmit={handleContactFormSubmit}>
                    <label htmlFor="name" style={{ fontSize: '16px', display: 'block' }}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactFormData.name}
                        onChange={handleContactFormChange}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        required
                    />

                    <label htmlFor="email" style={{ fontSize: '16px', display: 'block' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactFormData.email}
                        onChange={handleContactFormChange}
                        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        required
                    />

                    <label htmlFor="message" style={{ fontSize: '16px', display: 'block' }}>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={contactFormData.message}
                        onChange={handleContactFormChange}
                        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                        required
                    ></textarea>

                    <button type="submit" style={{ fontSize: '16px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
                </form>
            </section>

            <section>
                <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Help Center</h1>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                    Explore our Help Center to find answers to frequently asked questions
                    and get assistance with common issues.
                </p>

                <ul style={{ listStyle: 'none', padding: '0' }}>
                    {faqItems.map((faq) => (
                        <li key={faq.id} style={{ marginBottom: '20px' }}>
                            <details>
                                <summary style={{ fontSize: '18px', marginBottom: '10px', cursor: 'pointer' }}>{faq.question}</summary>
                                <p style={{ fontSize: '16px', marginLeft: '10px' }}>{faq.answer}</p>
                            </details>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ContactHelpPage;
