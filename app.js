let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let flash = require('connect-flash');
let logger = require('morgan');
let indexRouter = require('./routes/index');
let adminRouter = require('./routes/admin');
let studentRouter = require('./routes/student');
let passport = require('passport');
let md5 = require('md5');
let LocalStrategy = require("passport-local");
let methodOverride = require("method-override");
let connection = require('./database');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));


//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "this is gonna blow your mind",
    resave: false,
    saveUninitialized: false
}));



app.use(passport.initialize());
app.use(passport.session());
passport.use('local', new LocalStrategy({

        usernameField: 'username',

        passwordField: 'password',

        passReqToCallback: true //passback entire req to call back

    } , function (req, username, password, done){


        if(!username || !password ) {
            return done(null, false, console.log("************* All fields are required. **************"));
        }

        // let salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';

        connection.query("select * from users where id = ?", [username], function(err, rows){

            // if (err){
            //     console.log(err);
            // }
            //
            // console.log(rows);

            if (err) return done(req.flash('message',err));

            if(!rows.length){ return done(null, false, console.log("**************** Invalid username or password. ******************")); }

             // salt = salt+''+password;

            let dbPassword  = rows[0].pass;

            if(!(dbPassword === md5(password))){
                console.log("---------------------");
                console.log(password);
                console.log(md5(password));

                return done(null, false, console.log("********** Incorrect Password ************"));

            }

            return done(null, rows[0]);

        });

    }

));

passport.serializeUser(function(user, done){

    done(null, user.id);

});

passport.deserializeUser(function(id, done){

    connection.query("select * from users where id = "+ id, function (err, rows){

        done(err, rows[0]);

    });

});


app.use(function(req, res, next) {
    //make available inside our template
    res.locals.currentUser = req.user;
    //important: move to the code that handles the route
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/student', studentRouter);
app.use('/admin', adminRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;