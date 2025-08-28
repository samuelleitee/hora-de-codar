const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

require("dotenv").config()
require("./db")

app.use(express.static(path.join(__dirname, "public")))
console.log(path.join(__dirname, "public"))
app.use(cors())
// app.use(cors({
//   origin: '*', // permite qualquer origem
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // métodos permitidos
//   allowedHeaders: ['Content-Type'], // cabeçalhos permitidos
// }));

const pictureRouter = require("./routes/picture.route")
app.use("/pictures", pictureRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))