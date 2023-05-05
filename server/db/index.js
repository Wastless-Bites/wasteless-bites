const db = require('./db')

const User = require('./models/User')
const Review = require('./models/Review')
const Ad = require('./models/Ad')

// associations

module.exports = {
    db,
    models: {
        User,
        Review,
        Ad,
    },
}
