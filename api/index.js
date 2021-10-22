const express = require("express")
const app = express()
const dontev = require ("dontev")
const mongoose = require("mongoose")

dontev.config()

app.listen("5000" , () => {
    console.log("Backend application")
})