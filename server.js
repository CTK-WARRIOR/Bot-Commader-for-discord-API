const app = require('express')()
const port = process.env.PORT || 4000



app.get("/", (req, res) => {
  res.send("Welcome To the Api of Bot Commander For Discord")
})



//const { notFound } = require('./util')
const { keywords } = require("./data.json")


const { examplecode } = require("./code.json")

app.get("/keywords", (req, res) => {
res.json(keywords)

})

app.get("/codes", (req, res) => {
  res.send("NOT READY YET")
})

app.listen(port, () => console.log(`Listening on port ${port}.`))
