import express ,{ Express } from "express";
import * as database from "./config/database"
import dotenv from "dotenv"
import clientRoutes from "./routes/client/index.router"
import adminRoutes from "./routes/admin/index.router";
dotenv.config();

database.connect();

const app : Express = express();
const port :number | string = process.env.PORT  || 3000;

app.use(express.static("public"));

app.set("views","./views")
app.set("view engine" ,"pug")

clientRoutes(app)
adminRoutes(app)
app.listen(port ,()=>{
  console.log(`app listening on port ${port}`)
})