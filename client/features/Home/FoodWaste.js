import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const FoodWaste = () => {
  return (
    <>
      <Navbar />
      <h1>Food Waste</h1>
      <p>
        Food waste is the loss or disposal of food that is safe and nutritious
        for human consumption. It occurs at various stages of the food supply
        chain, from production and processing to retail and consumption. Food
        waste is a significant global issue, with an estimated one-third of all
        food produced for human consumption going to waste each year. Food waste
        has a significant impact on the environment, including the emission of
        greenhouse gases from the decomposition of food in landfills, the use of
        natural resources such as water and energy in the production of food
        that is ultimately wasted, and the loss of biodiversity caused by the
        conversion of natural habitats to agricultural land. Food waste also has
        economic and social implications. It represents a loss of resources and
        potential income for farmers, producers, and retailers, and it
        contributes to food insecurity and hunger in communities where access to
        food is limited. Reducing food waste is an essential step in addressing
        these environmental, economic, and social issues. Strategies to reduce
        food waste include better production and supply chain management,
        consumer education and awareness campaigns, and initiatives to
        redistribute surplus food to those in need. By working together,
        individuals, businesses, and governments can make significant progress
        in reducing food waste and creating a more sustainable food system.
      </p>

      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default FoodWaste;
