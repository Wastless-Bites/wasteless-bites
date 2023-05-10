import React from 'react'
import Footer from '../Footer/Footer.js'
import Navbar from '../Navbar/Navbar.js'

const LearnIndividual = () => {
    return (
        <div className="learn-individual">
            <Navbar />
            <h1>What we can do to help</h1>
            <p>
                Reducing food waste is an important step individuals can take to
                help combat climate change and promote sustainability. There are
                many simple ways that individuals can reduce their food waste,
                including buying only what they need, using leftovers
                creatively, and composting food scraps. Another great way to
                reduce food waste is to buy surplus food from restaurants or
                grocery stores. Many restaurants and grocery stores have surplus
                food that they can't sell, but is still perfectly good to eat.
                By purchasing this surplus food, individuals can save money and
                prevent it from going to waste. Additionally, individuals can
                also donate excess food to food banks or shelters, which helps
                to provide nutritious meals for those in need.
            </p>
            <Footer />
        </div>
    )
}

export default LearnIndividual
