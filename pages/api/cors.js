// pages/api/cors.js

import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  origin: 'https://81d2-2401-4900-81f4-ecda-194f-8eae-5f2-d07f.ngrok-free.app/',
  methods: ['GET', 'POST'], // Add other methods as needed
  credentials: true, // Enable credentials if required
});

// Helper function to initialize middleware
function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export default initMiddleware(cors);
