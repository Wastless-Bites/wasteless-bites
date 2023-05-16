import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const FoodWaste = () => {
    return (
        <>
            <Navbar />
            <div className="food-waste-container">
                <img
                    className="food-waste-img"
                    src="https://www.aljazeera.com/wp-content/uploads/2019/10/fe54b8a6f16647d8b63cfb61f416540a_6.jpeg"
                ></img>
                <p className="food-waste-text-section-one">
                    Food waste is a big problem that happens at all stages of
                    the food chain, with one-third of all food produced for
                    people being wasted each year. This hurts the environment,
                    people's income, and those who are already struggling to
                    access food.
                    <br></br>
                    <br></br>
                    We can help by being more mindful of our own food waste,
                    learning about where our food comes from, and supporting
                    initiatives that redistribute surplus food. Together, we can
                    build a more sustainable food system.
                </p>
            </div>

            <Footer />
        </>
    )
}

export default FoodWaste
