import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Recommended.scss";

const RandomList = () => {
  const [randoms, setRandoms] = useState([]);

  useEffect(() => {
    const fetchRandoms = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const meals = response.data.meals;
        setRandoms(meals);
      } catch (error) {
        console.error("Error fetching random meals:", error);
      }
    };

    fetchRandoms();
  }, []);

  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="sc-title">This Day Recommended</div>
        <section className="sc-random grid justify-center align-center">
          {randoms.map((random) => {
            const { idMeal: id, strMeal: title, strMealThumb: thumbnail } = random;

            return (
              <Link
                to={`/meal/${id}`}
                className="random-itm"
                key={id}
              >
                <div className="random-itm-img">
                  <img src={thumbnail} alt={title} />
                  <div className="random-itm-title">
                    <h3 className="text-white fs-15 fw-6 ls-1 text-uppercase">
                      {title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
          <div>
            <div className="about_content fs-30">
              <h2 className="text-center">Take a look at our amazing food recommendation</h2>
            </div>
            <div className="features mt-3">
            <div className="features1 d-flex flex-wrap justify-content-between flex-row align-items-center">
              <div className="single_feature">
                <span>
                  <i className="ri-sparkling-2-line"></i>
                </span>
                <h6>Rich Nutrition</h6>
              </div>
              <div className="single_feature">
                <span className="features2">
                  <i className="ri-mail-star-line"></i>
                </span>
                <h6>Updated Food Recommendation</h6>
              </div>
              <div className="single_feature">
                <span>
                  <i className="ri-book-mark-fill"></i>
                </span>
                <h6>Food Recipe Inspiration</h6>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RandomList;
