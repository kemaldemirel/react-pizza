import React from 'react';
import { Categories, SortPopup, PizzaBlock, LoadingPizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const itemsCategory = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

const Home = () => {
  const itemsPizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  console.log(category);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [category]);

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
        {isLoaded
          ? itemsPizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
          : Array(12)
              .fill(null)
              .map((_, index) => <LoadingPizzaBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
