const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://root:root@image-upload-cluster.hsu29vj.mongodb.net/`)

    console.log("Database Connected!")
}

main().catch(err => console.log(err))