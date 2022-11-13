import { legacy_createStore } from 'redux';

import { setCatalogAction, setCategoriesAction, setCurrentCategoryAction, viewItemDetailsAction, addToCartAction, removeFromCartAction, openCartAction, closeCartAction } from './reducers.js';
import reducer from './reducers.js';

const store = legacy_createStore(reducer)

const setCatalog = setCatalogAction;
const setCategories = setCategoriesAction;
const setCurrentCategory = setCurrentCategoryAction
const viewItemDetails = viewItemDetailsAction;
const addToCart = addToCartAction;
const removeFromCart = removeFromCartAction;
const openCart = openCartAction;
const closeCart = closeCartAction;
export {
  addToCart, removeFromCart, openCart, closeCart,
  setCatalog, setCategories, setCurrentCategory, viewItemDetails
};

export default store;
