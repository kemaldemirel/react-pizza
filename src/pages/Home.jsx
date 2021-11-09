import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/actions/filters';

const itemsCategory = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const Home = () => {
  const itemsPizzas = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} itemsCategory={itemsCategory} />
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
        {itemsPizzas.length > 0 ? (
          itemsPizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
        ) : (
          <div>Пицц нет!</div>
        )}
      </div>
    </div>
  );
};

export default Home;
