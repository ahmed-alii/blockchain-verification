let database = require('mysql');

    let connection = database.createConnection({
        host: "192.169.82.14",
        port: "3306",
        user: "ahmaliic_webstorm",
        password: "user_user",
        database: "ahmaliic_zain"
    });


    module.exports = {
        connectDB: function (queryString) {


        }
    };

module.exports = connection;

