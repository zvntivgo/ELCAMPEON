const fetch = require('node-fetch');

exports.handler = async (event) => {
  // URL de tu Google Apps Script (¡REEMPLAZA CON TU URL REAL!)
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwK2atZNd_oiUjyp3mUNETaxvWjRq7qEyYeOo-gdOk67SlORAmImCHIRzxS3lVF5hDQ/exec';
  
  try {
    const options = {
      method: event.httpMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      body: event.body
    };
    
    const response = await fetch(GOOGLE_SCRIPT_URL, options);
    const data = await response.text();
    
    return {
      statusCode: response.status,
      body: data,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        status: 'error',
        message: 'Error en el proxy: ' + error.message 
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  }
};