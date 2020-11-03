// IMPORTING BUT IN THE ANTIQUATED WAY //
const express = require("express")
const postsRouter = require("./posts/postsRouter")

// CREATING THE SERVER //
const server = express()

// MAKING SURE SERVOR KNOWS ABOUT .JSON //
server.use(express.json())

// SETTING UP THE SERVER TO USE THE ROUTER //
server.use("/api/posts", postsRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "The server is online. Welcome to localhost:5000"})
})

server.listen(5000, () => {
    console.log("IT'S WORKING")
})