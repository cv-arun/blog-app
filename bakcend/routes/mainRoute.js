const express = require('express')
const router = express.Router();
const blogController=require('../controller/blogController')

router.post('/create-blog',blogController.createBlog)
router.post('/get-blog',blogController.getBlog)
router.get('/get-all-blog',blogController.getAllBlog)


module.exports = router
