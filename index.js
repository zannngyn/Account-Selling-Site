import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  res.render("index.ejs", {

  });
});
app.post("/add", async (req, res) =>{
 
})

app.post("/remove", async (req, res) =>{
  
})

app.post("/delete", async (req, res) =>{
 
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});