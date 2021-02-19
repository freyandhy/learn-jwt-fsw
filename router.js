const router = require("express").Router()

// Middleware
const restrict = require('./middlewares/restrict')

// Controller
const auth = require("./controllers/authController")

router.get("/", (req, res) => {
  res.json({
    status: "Simple RESTful API"
  })
})

router.post("/register", auth.register)
router.post("/login", auth.login)
router.get('/whoami', restrict, auth.whoami)


module.exports = router;