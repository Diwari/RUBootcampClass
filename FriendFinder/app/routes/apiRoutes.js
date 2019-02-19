let friends = require("../data/friends");
let path = require("path");

module.exports = function(app){

  app.get("/app/data/friends", function(req, res){
    res.json(friends);
  });
  app.post("/app/data/friends", function(req,res){
    friends.push(req.body);

    user
    let bestMatch = {
      name:"",
      photo:"",
      difference: 1000

    };
    console.log(req.body.name);
    userName = res.body.name;
    userPhoto = res.body.photo;
    userScore = res.body.scores;

    userData = 0;

    for(let i = 0; i < friends.length; i++){

    }




    //get array from friends.js 


  });
};

