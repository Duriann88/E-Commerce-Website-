// components/ContactHelpPage.js
"use client";
import React, { useState } from 'react';

const ContactHelpPage = () => {
    const [faqItems, setFaqItems] = useState([
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
        // Add more FAQ items as needed
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
        // Handle form submission logic (e.g., send data to server)
        console.log('Form submitted:', contactFormData);
        // You can add more sophisticated logic here (e.g., sending data to a server)
    };

    return (
        <div>
            <section>
                <h1>Contact Us</h1>
                <p>
                    Have a question or need assistance? Feel free to reach out to our
                    customer support team.
                </p>
                <form onSubmit={handleContactFormSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactFormData.name}
                        onChange={handleContactFormChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactFormData.email}
                        onChange={handleContactFormChange}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={contactFormData.message}
                        onChange={handleContactFormChange}
                        required
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </section>

            <section>
                <h1>Help Center</h1>
                <p>
                    Explore our Help Center to find answers to frequently asked questions
                    and get assistance with common issues.
                </p>

                <ul>
                    {faqItems.map((faq) => (
                        <li key={faq.id}>
                            <details>
                                <summary>{faq.question}</summary>
                                <p>{faq.answer}</p>
                            </details>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ContactHelpPage;
