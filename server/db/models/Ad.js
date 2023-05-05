const Sequelize = require('sequelize')
const db = require('../db')

const Ad = db.define('Ad', {
    food_description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        },
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        },
    },
    available_from: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    available_until: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    isExpired: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    coming: {
        type: Sequelize.INTEGER,
    },
})

module.exports = Ad
