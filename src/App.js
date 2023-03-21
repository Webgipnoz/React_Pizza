import React from "react";

import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";

import "./scss/app.scss";
import pizzas from "./Pizza.json";

function App() {
  fetch("https://641a4369f398d7d95d53c155.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((arr) => {
      console.log("Массив", arr);
    });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
