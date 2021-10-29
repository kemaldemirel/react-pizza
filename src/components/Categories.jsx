import React from 'react';

const Categories = ({ items, onClickShowName }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onClickActive = (name, index) => {
    onClickShowName(name);
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onClickActive(name, index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
