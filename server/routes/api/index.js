const router = require('express').Router()
const conn = require('../../db/')

router.get('/categories', (req, res, next) => {
  conn.query('SELECT name, id FROM categories WHERE parent_id IS NULL', function(error, results, fields) {
    res.json(results)
  })
})
router.get('/subcategories', (req, res, next) => {
  conn.query('SELECT name, parent_id, id FROM categories WHERE parent_id IS NOT NULL', function(error, results, fields) {
    res.json(results)
  })
})
router.get('/getPostings', (req, res, next) => {
  conn.query(`SELECT * FROM postings WHERE category LIKE '%${req.query.subcategory}%'`, function(error, results, fields) {
    res.json(results)
    console.log(req.query.subcategory)
  })
})
router.get('/getPost', (req, res, next) => {
  conn.query('SELECT * FROM postings WHERE id = ' + req.query.id, function(errors, results, fields) {
    res.json(results)
  })
})
router.get('/addPost', (req, res, next) => {
  conn.query(`INSERT INTO postings (title, image, content, category, price, city) VALUES ("${req.query.title}","https://via.placeholder.com/300x300.png","${req.query.content}","${req.query.category}",${req.query.price},"${req.query.city}")`, function(error, results, fields) {
  })
})

module.exports = router