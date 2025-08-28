const express = require("express")
const router = express.Router()

const upload = require("../config/multer")
const pictureController = require("../controllers/picture.controller")

router.post("/", upload.single("file"), pictureController.create)
router.get("/", pictureController.findAll)
router.delete("/:id", pictureController.remove)

module.exports = router