__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/api/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/api/news', (req, res) => {
    res.redirect('https://api-berita-indonesia.vercel.app/cnn/terbaru')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'BERKAHESPORT',
            namaowner: '@moexti',
            instagram: '@moexti',
            youtube : 'https://m.youtube.com/channel/UCG_Xj6eHBMaW9HTHTya9q6w'
        }
    }
    res.json(config)
})

module.exports = router
