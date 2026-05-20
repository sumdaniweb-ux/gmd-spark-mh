// server.js snippet
const fetch = require('node-fetch'); // Ya browser native fetch
const config = require('./gmd_config.json');

async function syncToCloud() {
    console.log(" Starting API Sync...");
    try {
        const response = await fetch(config.api.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GMD_API_KEY}`
            },
            body: JSON.stringify({
                status: 'syncing',
                backup_location: 'mobile_internal',
                timestamp: Date.now()
            })
        });
        const result = await response.json();
        console.log("✅ API Sync Success:", result);
    } catch (error) {
        console.error("❌ API Sync Failed, Keeping Local:", error);
    }
}