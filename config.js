

 module.exports = {
    name: 'API',
    version: '1',
    env: process.env.NODE_ENV || 'development',
    admin: {
        port: process.env.PORT || 3000,
        base_url: process.env.BASE_URL || 'http://localhost:3001',
    },
    mobile: {
        port: process.env.PORT || 3002,
        base_url: process.env.BASE_URL || 'http://localhost:3002',
    },    
 };
