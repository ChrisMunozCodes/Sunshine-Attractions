const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require("path");
const mainRoutes = require("./routes/main");
const reviewRoutes = require("./routes/review");
const multer = require("multer"); // for parsing multipart/form-data

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));
app.use(express.static("imgs"));
app.use("/css", express.static("dist"));

//Exposes view folder for tailwind.
app.use(express.static(path.join(__dirname, 'views')))


//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Parse JSON-encoded bodies
app.use(bodyParser.json());
app.use(cookieParser());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure multer for parsing multipart/form-data
const upload = multer();

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/review", reviewRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
