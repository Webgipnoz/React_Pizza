import React from "react";

import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";

import "./scss/app.scss";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price={15} />
            <PizzaBlock title="Украинская" price={19} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
