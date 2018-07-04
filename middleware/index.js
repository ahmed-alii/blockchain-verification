var middlewareObj = {};

//allows access only to logged in users
middlewareObj.isLoggedIn = function(req, res, next) {
    //check if the user is authenticated
    if(req.isAuthenticated()) {
        //allow access to the resource
        return next();
    }
    //else redirect to the login page
    req.flash("error", "You must be signed in to do that!");
    res.redirect("/");
};

module.exports = middlewareObj;
