import React, { useEffect, useState, useReducer } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Genre.scss";
import { AiOutlineCheckSquare } from 'react-icons/ai';

const initialState = {
  recipes: [],
  isFetching: true,
  selectedCategory: "resep-dessert"
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return {
        ...state,
        recipes: action.payload.recipes,
        isFetching: false
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload.category,
        isFetching: true
      };
    default:
      return state;
  }
};

const RecipeList = () => {
  const categories = [
    "resep-dessert",
    "masakan-hari-raya",
    "masakan-tradisional",
    "menu-makan-malam",
    "menu-makan-siang",
    "resep-ayam",
    "resep-daging",
    "resep-sayuran",
    "resep-seafood",
    "sarapan"
  ];

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchRecipes();
  }, [state.selectedCategory]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://resep-hari-ini.vercel.app/api/category/recipes/${state.selectedCategory}`);
      const data = await response.json();

      const recipeData = data.results.map((recipe) => ({
        title: recipe.title,
        thumb: recipe.thumb,
        key: recipe.key,
        difficulty: recipe.difficulty,
        times: recipe.times,
        desc: [],
        ingredient: [],
        step: [],
      }));

      dispatch({ type: 'SET_RECIPES', payload: { recipes: recipeData } });

      const recipeDetailsPromises = recipeData.map(async (recipe) => {
        const response = await fetch(`https://resep-hari-ini.vercel.app/api/recipe/${recipe.key}`);
        const data = await response.json();
        return {
          ...recipe,
          desc: data.results.desc,
          ingredient: data.results.ingredient,
          // step: data.results.step,
        };
      });

      const recipeDetails = await Promise.all(recipeDetailsPromises);
      dispatch({ type: 'SET_RECIPES', payload: { recipes: recipeDetails } });
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleCategoryChange = (e) => {
    dispatch({ type: 'SET_CATEGORY', payload: { category: e.target.value } });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="sc-title">Indonesia Genres</div>
        <div className="select-container">
          <select value={state.selectedCategory} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <Slider {...settings} className={state.isFetching ? 'slider-loading' : ''}>
          {state.recipes.map((recipe) => (
            <div className="genre-itm align-center justify-center" key={recipe.key}>
              <div className="genre-itm-img">
                <img src={recipe.thumb} alt={recipe.title} className="recipe-img" />
                <div className="genre-itm-title bg-orange">
                  <h3 className="text-white fs-15 fw-6 ls-1 text-uppercase">
                    {recipe.title}
                  </h3>
                </div>
                <div className="recipe-details">
                  <div className="recipe-time"><p>Estimasi Waktu: {recipe.times}</p></div>
                  <div className="recipe-difficulty"><p>Estimasi Tingkat Kesulitan: {recipe.difficulty}</p></div>
                  <h3>DESKRIPSI:</h3>
                  <div className="recipe-desc"><p>{recipe.desc}</p></div>
                  <h3>BAHAN YANG DIPERLUKAN:</h3>
                  <div className="recipe-ingredient">
                    <ul>
                      {recipe.ingredient.map((item, index) => (
                        <li key={index}>
                          <AiOutlineCheckSquare size={18} className="text-orange li-icon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecipeList;
