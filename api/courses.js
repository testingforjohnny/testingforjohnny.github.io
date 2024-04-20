
// /api/courses.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const apiUrl = 'https://johnsacademy.com.au/wp-json/ldlms/v1/courses';
    const appPassword = process.env.WORDPRESS_APP_PASSWORD;  // Accessing the application password securely
    
    const response = await fetch(apiUrl, {
        headers: {
            'Authorization': `Basic ${Buffer.from(`your_username:${appPassword}`).toString('base64')}`  // Basic auth header
        }
    });
    if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch data' });
    }
    const courses = await response.json();
    res.status(200).json(courses);
};
