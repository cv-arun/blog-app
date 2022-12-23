const blogHelper = require('../helper/blogHelper')

module.exports = {
    createBlog: async (req, res, next) => {

        try {
            console.log(req.body)
            let data = await blogHelper.createBlog(req.body)
            res.json(data)

        } catch (err) {
            next(err)
        }



    },
    getAllBlog: async (req, res, next) => {

        try {
            let data = await blogHelper.getAllBlog()
            res.json(data)
        } catch (err) {
            next(err)
        }
    },
    getBlog: async (req, res, next) => {
        console.log(req.body)
        try {
            let data = await blogHelper.getBlog(req.body.id)
            res.json(data)
        } catch (err) {
            next(err)
        }
    }
}