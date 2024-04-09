const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()
const Shopify = require('shopify-api-node');
const jwt = require('jsonwebtoken');

const shopify = new Shopify({
  shopName: process.env.shopName,
  apiKey: process.env.apiKey,
  password: process.env.password
});


const pushData = async () => {
  try {
    // Fetch orders from Shopify
    const data = await shopify.order.list();

    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Error:', error);
  }
};

app.get('/redshift', async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
    if (token !== 'redshift123!') {
      return res.status(401).send('Unauthorized');
    }
    const result = await pushData();
    res.send(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while pushing data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});