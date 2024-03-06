require('dotenv').config();

const dev = {
    app : {
        port : process.env.PORT || 4010
    },
    db : {
        url : process.env.DB_URL || "mongodb://localhost:27017/TodoApps"
    }
}

module.exports = dev;