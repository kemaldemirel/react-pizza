import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

const Home = ({ showName, data }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickShowName={showName}
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {data.map((pizza) => (
          <PizzaBlock key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
