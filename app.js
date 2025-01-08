const express = require('express');
const path = require('path');

const app = express();
// Update PORT to use environment variable for Heroku
const PORT = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// API endpoint to get server time
app.get('/api/server-time', (req, res) => {
    const serverTime = new Date();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    res.json({
        time: serverTime.toLocaleString(),
        timeZone: timeZone
    });
});

// Serve index.html at root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
}); 