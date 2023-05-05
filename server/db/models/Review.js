const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('Review', {
    individual_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    organization_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    comment: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            max: 100,
            min: 10,
            notEmpty: true,
            notNull: true,
        },
    },
})

module.exports = Review
