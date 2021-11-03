import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector } from 'react-redux';

const Home = ({ showName }) => {
  const { items } = useSelector(({ filter, pizzas }) => ({
    items: pizzas.items,
    sortBy: filter.sortBy,
  }));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickShowName={showName}
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
