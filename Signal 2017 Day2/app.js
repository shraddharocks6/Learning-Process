const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const sessions      = require("client-sessions");
const helmet        = require("helmet");

var app = express();


mongoose.connect("mongodb://localhost:27017/auth", {useUnifiedTopology: true,useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("We are connected to MongoDB");
  });


let User = mongoose.model("User", new mongoose.Schema({
    firstName   :{ type: String, required: true},
    lastName    :{ type: String, required: true},
    email       :{ type: String, required: true, unique:true},
    password    :{ type: String, required: true}
}));


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: false
}));


    //FOR SESSIONS
app.use(sessions({
    cookieName: "session",
    secret : "jdbsfjgsvhgfhdsgfhdbfhbhsdfbsdhfvdhs",
    duration: 30*60*1000,       //30 Minutes
    activeDuration: 5 * 60 * 1000,
    httpOnly: true, //Doesn't let js code access cookies
    secure  : true,     //ONLY SET COOKIES OVER HTTPS
    ephemeral : true //DISTROY COOKIES WHEN THE BROWSER CLOSES 
}));


app.use(helmet());
    //AUTHENTICATION
app.use((req, res, next) => {
    if (!(req.session && req.session.userId)){
        return next();
    }

    User.findById(req.session.userId, (err, user) => {
        if(err){
            return next(err);
        }

        if(!user) {
            return next();
        }

        user.password = undefined;

        req.user = user;
        res.locals.user = user; //allows us to use our user in any of out html templates

        next();
    });
});





app.get("/", function(req, res){
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register",(req, res) => {
    let hash = bcrypt.hashSync(req.body.password, 14);
    req.body.password = hash;

    let user = new User(req.body);

    user.save((err) => {
        if(err) {
            let error = "Something is wrong";

            if(err.code === 11000){
                error = "This email id already exists";
            }
            return res.render("register",{ csrfToken: req.csrfToken() }); //FOR CSRF PROTECTION
        }
        res.redirect("/dashboard");

    });
});

// app.post("/register", (req, res) => {
//     res.json(req.body);
// });



app.get("/login", function(req, res){
    res.render("login");
});
app.post("/login", (req,res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(err|| !user || !bcrypt.cpmpareSync(req.body.password, user.password)) {
            return res.render("login", { csrfToken: req.csrfToken()});    //FOR CSRF PROTECTION
        }

        req.session.userId = user._id;  //CHECKING ABOUT CURRENT SESSION
        res.redirect("/dashboard");
    });
});




app.get("/dashboard", loginRequired ,(req, res, next) => {
//FOLLOWING BECOMES USELESS IF WE USE MIDDLEWARE
    if(!(req.session&&req.session.userId)) {
        return res.redirect("/login");
    }

    User.findById(req.session.userId, (err, user) => {
        if(err) {
            return next(err);
        }

        if (!user){
            return res.redirect("/login");
        }

        res.render("dashboard");
    });
});


function loginRequired(req, res, next) {
    if(!req.user){
        return res.redirect("/login");
    }

    next();
}


app.listen(3300, function(){
    console.log("Server is up");
})