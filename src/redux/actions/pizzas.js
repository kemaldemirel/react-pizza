import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get('http://localhost:5000/pizzas')
    .then(({ data }) => {
      dispatch(setPizzas(data));
    })
    .catch((error) => console.log(error.message));
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
