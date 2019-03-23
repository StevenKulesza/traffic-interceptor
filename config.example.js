// example config
module.exports = {
    dev: {
        targetUrl: 'http://localhost:3000',
        database: {
            url: 'mongodb://localhost:27017/interceptor'
        }
    },
    prod: {
        targetUrl: 'your_url_here',
        database: {
            url: 'mongodb://localhost:27017/interceptor'
        }
    }
}