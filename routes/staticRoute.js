const express = require('express')
const { applyVirtuals } = require('../models/url');
const URL = require('../models/url'); // Importing the URL model
 
const router = express.Router()

router.get('/', async(req, res) => {
    const allUrls = await URL.find({})
    return res.render("home", {
        urls: allUrls,
    })
})

module.exports = router;