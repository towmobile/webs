const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')



// var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static('public'))
app.use(expressLayouts);
app.set('layout', './layout/index')
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('home')
})

const hostname = "127.0.0.9";
const port = 3009;
app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`)
   
})