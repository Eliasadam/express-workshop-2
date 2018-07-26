const exphbs = require("express-handlebars");
const express = require("express");
const app = express();
const posts = require("./data/posts.json")
// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html
app.use(express.static("public", {'extensions': ['html']}));

app.get("/contact", function(req, res){
res.render("contact");
}
);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", {
  title: "Elias Profile" 

  });
});

app.get("/my-posts", (req, res) => {
  res.render("mypost", posts);
  
});







 app.get("/my-post", function(req, res){
   res.render("my-post");
 });

app.get("/my-cv", (req, res) => {
  res.render("my-cv");
});

  app.get("/admin", (req, res) => {
    res.render("admin");
  });


// what does this line mean: process.env.PORT || 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});