import express from "express" ; 
import bodyParser from "body-parser";
import path, { dirname } from "path" ; 
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)) ; 

const app = express() ; 
const port = 3000 ; 
app.use(bodyParser.urlencoded({extended : true})) ; 
app.set('views', path.join(__dirname + '/views'));
app.set('view engine' , 'ejs');
app.use("/static" , express.static(__dirname +"/public")) ;
app.get("/" , (req,res) => {
    res.render("index.ejs") ; 
}) ;
app.get("/login" , (req,res) => {
    res.render("login.ejs") ; 
}) ;
app.get("/cart" , (req,res) => {
    res.render("cart.ejs") ; 
}) ;
app.get("/seller" , (req,res) => {
    res.send("Coming Soon... ") ; 
}) ;



app.listen(port , () => {
    console.log(`Server is listening on port ${port}`) ; 
}) ;