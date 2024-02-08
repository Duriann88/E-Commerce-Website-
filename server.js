// Jaden - Full Ownership

const express = require('express'); // This is to import express 
const cors = require('cors'); // This is to import Cross-Origin Resource Sharing
const stripeSecretKey = process.env.NEXT_APP_STRIPE_SECRET_KEY;
// This is to use stripe and the secret key is needed.
const stripe = require('stripe')(stripeSecretKey);

const app = express(); // Assigns express to constant app
app.use(cors()); // This enables CORS which allows the server to accept requests from different places.
app.use(express.json()); //Parses incoming JSON payloads from requests

app.post("/checkout", async (req, res) => { // Defining a "POST" route called '/checkout' to create a Stripe session
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    }); 

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success", // Defines the success page after transaction
        cancel_url: "http://localhost:3000/cancel"    // Defines the page when the person decides to cancel the page
    });

    res.send(JSON.stringify({ //Sends a JSON type response after the checkout session to the client
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!")); // Specifies port 4000 for the Express server
