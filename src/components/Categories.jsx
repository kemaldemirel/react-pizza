import React from 'react';

const Categories = React.memo(({ itemsCategory, onClickItem }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onClickActive = (index) => {
    onClickItem(index);
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
          Все
        </li>
        {itemsCategory &&
          itemsCategory.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onClickActive(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
