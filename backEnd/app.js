// import express module
const express = require("express");

// import body-parser module
const bodyParser = require("body-parser");

// import mongoose
// the port of data base is 27017
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://souhail:azerty123@cluster0.e0enzyi.mongodb.net/",
  { useNewUrlParser: true }
);

// "mongodb+srv://souhail:azerty123@cluster0.e0enzyi.mongodb.net/?retryWrites=true&w=majority"
// crypt the password
const bcrypt = require("bcrypt");

// import axios api reuest to connect with openweather web api : online server
const axios = require("axios");

// creat une app back end named app
const app = express();

//configurer body-parser pour structurer la reponse du BE sous format json
app.use(bodyParser.json());

//configurer body-parser pour parser le request du FE s(acceder le contenu de l'objet)
app.use(bodyParser.urlencoded({ extended: true }));

// import path module
const path = require("path");

// import multer module
const multer = require("multer");

// import jsonwebtoken
const jwt = require("jsonwebtoken");

// import session ta3 timing ta3 session
const session = require("express-session");

// configuration de multer module
app.use("/images", express.static(path.join("backEnd/images")));

// media type
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    // let error = new Error("Mime type is invalid");
    // if (isValid) {
    //   error = null;
    // }
    cb(null, "backEnd/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

// secret key ta3 express session eli ta3mel el codage wel decodage ta3 l'objet connecté
const secretKey = "croco-souhail-23-cun";
app.use(
  session({
    secret: secretKey,
  })
);

//security config.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

const Match = require("./models/match");
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user");

// let allMatches = [
//   { id: 1, teamOne: "fcb", teamTwo: "rmd", scoreOne: "3", scoreTwo: "2" },
//   { id: 2, teamOne: "juventus", teamTwo: "psj", scoreOne: "5", scoreTwo: "6" },
//   { id: 3, teamOne: "Mun", teamTwo: "city", scoreOne: "3", scoreTwo: "4" },
// ];

//busines logic.
//busines logic to get all matches.
app.get("/matches", (req, res) => {
  console.log("here into bl : ");
  Match.find().then((docs) => {
    console.log("here docs from db", docs);
    res.json({ matchesTab: docs });
  });
  // res.json({ t: allMatches, msg: "here is all matches" });
});

//busines logic to get a match by Id.
app.get("/matches/:id", (req, res) => {
  // recuperer l'id
  let matchId = req.params.id;
  console.log("here into all matches", matchId);
  Match.findById(matchId).then((doc) => {
    res.json({ foundMatch: doc });
  });
});

//busines logic to get a player by Id.
app.get("/players/:id", (req, res) => {
  // recuperer l'id
  let playerId = req.params.id;
  console.log("here into foundPlayer", playerId);
  Player.findById(playerId).then((doc) => {
    res.json({ foundPlayer: doc });
  });
});

//busines logic to get a team by Id.
app.get("/teams/:id", (req, res) => {
  // recuperer l'id
  let teamId = req.params.id;
  console.log("here into foundTeam", teamId);
  Team.findById(teamId).then((doc) => {
    res.json({ foundTeam: doc });
  });
});

// busines logic to get all players.
// let allPlayers = [
//   { id: 1, name: "leoMessi", age: "35", number: "10", position: "attk" },
//   { id: 2, name: "cristiano", age: "37", number: "7", position: "mileuAttk" },
// ];

// get all players
app.get("/players", (req, res) => {
  console.log("here into all players");
  Player.find().then((docs) => {
    console.log("here's all players", docs);
    res.json({ playersTab: docs });
  });
});

//busines logic to delete selected Match.
app.delete("/matches/:id", (req, res) => {
  let matchId = req.params.id;
  Match.deleteOne({ _id: matchId }).then((deleteResponse) => {
    console.log("here is deletedresponse", deleteResponse);
    if (deleteResponse.deletedCount == 1) {
      res.json({ message: "success" });
    } else {
      res.json({ message: "error" });
    }
  });
});

//busines logic to delete selected player.
app.delete("/players/:id", (req, res) => {
  let playerId = req.params.id;
  Player.deleteOne({ _id: playerId }).then((deleteResponse) => {
    console.log("here is deletedresponse", deleteResponse);
    if (deleteResponse.deletedCount == 1) {
      res.json({ message: "player deleted with success" });
    } else {
      res.json({ message: "error: player" });
    }
  });
});

// busines logic to delete selected team.
app.delete("/teams/:id", (req, res) => {
  let teamId = req.params.id;
  Team.deleteOne({ _id: teamId }).then((deleteResponse) => {
    console.log("here is deletedresponse", deleteResponse);
    if (deleteResponse.deletedCount == 1) {
      res.json({ message: "team deleted with success" });
    } else {
      res.json({ message: "error : team " });
    }
  });
});

// business logic to add player.
app.post("/players", (req, res) => {
  console.log("here into addPlayer", req.body);

  Team.findById(req.body.tId).then((team) => {
    if (!team) {
      return res.json({ msg: "team not found" });
    }
    let player = new Player({
      name: req.body.name,
      age: req.body.age,
      number: req.body.number,
      position: req.body.position,
      team: team._id,
    });
    player.save((err, doc) => {
      if (err) {
        res.json({ msg: "player can't be added to data base" });
      } else {
        team.players.push(doc);
        team.save();
        res.json({ msg: "player added with success" });
      }
    });
  });
});

// business logic to edit match.
app.put("/matches", (req, res) => {
  Match.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
    console.log("here updated response", updateResponse);
    if (updateResponse.nModified == 1) {
      res.json({ msg: "edited with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});

// business logic to edit player
app.put("/players", (req, res) => {
  Player.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
    console.log("here updated response", updateResponse);
    if (updateResponse.nModified == 1) {
      res.json({ msg: "player edited with success" });
    } else {
      res.json({ msg: "error : player" });
    }
  });
});

// business logic to edit team
app.put("/teams", (req, res) => {
  Team.updateOne({ _id: req.body._id }, req.body).then((updateResponse) => {
    console.log("here updated response", updateResponse);
    if (updateResponse.nModified == 1) {
      res.json({ msg: "player edited with success" });
    } else {
      res.json({ msg: "error : player" });
    }
  });
});

let allUsers = [
  {
    id: 1,
    firstName: "souhail",
    lastName: "landoulsi",
    email: "souhail@gmail.com",
    password: "azerty123",
    tel: "21365267",
  },
];

// add user
// app.post("/users/signup", (req, res) => {
//   let user = new User(req.body);
//   user.save();
//   res.json({ msg: "user added with success" });
// });

// login user
// app.post("/users/login", (req, res) => {
//   let user = req.body;
//   let foundUser = false;
//   let userObj;
//   for (let i = 0; i < allUsers.length; i++) {
//     if (allUsers[i].email == user.email && allUsers[i].password == user.pwd) {
//       foundUser = true;
//       userObj = allUsers[i];
//       break;
//     }
//   }
//   if (foundUser) {
//     res.json({ msg: true });
//   } else {
//     res.json({ msg: false });
//   }
// });

// serach match by score
app.post("/matches/search", (req, res) => {
  let obj = req.body;
  let foundMatches = [];
  for (let i = 0; i < allMatches.length; i++) {
    if (
      allMatches[i].scoreOne == obj.score ||
      allMatches[i].scoreTwo == obj.score
    ) {
      foundMatches.push(allMatches[i]);
    }
  }
  if (foundMatches != []) {
    res.json({ msg: "found them", g: foundMatches });
  } else {
    res.json({ msg: "found nothing " });
  }
  console.log(obj.score);
  res.json({ msg: "found them ", g: foundMatches });
});

// serach weather by city  test
app.post("/weather/search", (req, res) => {
  let cityName = req.body.name;
  console.log(cityName);
  let key = "24772939d1dbc174b10a203a0c72f57e";
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
    )
    .then((ApiRes) => {
      console.log("here api response", ApiRes.data);
      let result = {
        temperature: ApiRes.data.main.temp,
        humidity: ApiRes.data.main.humidity,
        pressure: ApiRes.data.main.pressure,
        speed: ApiRes.data.wind.speed,
        icone: ApiRes.data.weather[0].icon,
      };
      res.json({ resultApi: result });
    });
});

// add match
app.post("/matches", (req, res) => {
  console.log("heeeere added match");
  let match = new Match(req.body);
  match.save();
  res.json({ msg: "match added with success" });
});

// add team
app.post("/teams", (req, res) => {
  let team = new Team(req.body);
  console.log("reqbody", req.body);
  team.save();
  console.log("here is added team", team);
  res.json({ msg: "here is added team" });
});

// get all teams
app.get("/teams", (req, res) => {
  Team.find().then((docs) => {
    console.log("here is all teams", docs);
    res.json({ teamsTab: docs });
  });
});

// bl of signup
app.post(
  "/users/signup",
  multer({ storage: storageConfig }).single("img"),
  (req, res) => {
    console.log("here signup BL", req.body);
    bcrypt.hash(req.body.password, 10).then((cryptedPwd) => {
      console.log("here crypted pwd", cryptedPwd);
      req.body.password = cryptedPwd;
      req.body.avatar = `http://localhost:3000/images/${req.file.filename}`;
      let user = new User(req.body);
      user.save();
      res.json({ msg: "added with success" });
    });
  }
);

// login
app.post("/users/login", (req, res) => {
  console.log("here login");
  let user = req.body;
  User.findOne({ email: user.email }).then((doc) => {
    console.log(doc);
    if (!doc) {
      return res.json({ msg: "check ur email" });
    }
    bcrypt.compare(user.password, doc.password).then((pwdResult) => {
      if (!pwdResult) {
        return res.json({ msg: "please check your pwd" });
      }
      let userToSend = {
        fName: doc.firstName,
        lName: doc.lastName,
        id: doc._id,
        role: doc.role,
      };
      // create token
      const token = jwt.sign(userToSend, secretKey, { expiresIn: "1h" });

      return res.json({ msg: "welcome", token: token });
    });
  });
});

// get user by id
app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  User.findById(id).then((doc) => {
    res.json({ foundUser: doc });
  });
});

// export l'app dans tt le projet
module.exports = app;
