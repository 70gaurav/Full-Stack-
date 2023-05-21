import express from "express"
import adminRouter from "./routes/admin.js" 
import connection from "./db/index.js"
import bodyParser from "body-parser"

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine" ,"pug")

app.use("/admin",adminRouter)



connection
.then(()=> {
    app.listen(3000,() => console.log("server started"))
})
.catch((err) => {
    console.log(err)
})