import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onclickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onclickCategory(0)}
          className={activeIndex === 0 ? "active" : ""}
        >
          Все
        </li>
        <li
          onClick={() => onclickCategory(1)}
          className={activeIndex === 1 ? "active" : ""}
        >
          Мясные
        </li>
        <li
          onClick={() => onclickCategory(2)}
          className={activeIndex === 2 ? "active" : ""}
        >
          Вегетарианская
        </li>
        <li
          onClick={() => onclickCategory(3)}
          className={activeIndex === 3 ? "active" : ""}
        >
          Гриль
        </li>
        <li
          onClick={() => onclickCategory(4)}
          className={activeIndex === 4 ? "active" : ""}
        >
          Острые
        </li>
        <li
          onClick={() => onclickCategory(5)}
          className={activeIndex === 5 ? "active" : ""}
        >
          Закрытые
        </li>
      </ul>
    </div>
  );
}

export default Categories;
