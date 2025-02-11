import React from "react";

import FeaturedFoods from "../components/FeaturedFoods";
import BannerSlider from "../components/BannerSlider";
import FoodDonationsPage from "../pages/FoodDonationsPage";
import PopularCategories from "../ExtraSection/PopularCategories";
import AboutSection from "../ExtraSection/AboutSection";
import PopularTopics from "../ExtraSection/PopularTopics";
import MovingIcons from "../ExtraSection/MovingIcons";
import SalesPromotion from "../ExtraSection/SalesPromotion";


const HomePage = () => {
  return (
    <div className="">
      <section>
        <BannerSlider/>
          </section>
          <PopularTopics/>
      <section>
        <FeaturedFoods />
          </section>
         
          <section>
              <PopularCategories/>
          </section>
          <MovingIcons/>
      <section>
        <FoodDonationsPage/>
      </section>
      <section>
        <SalesPromotion/>
      </section>
          <section>
              <AboutSection/>
          </section>
    </div>
  );
};

export default HomePage;
