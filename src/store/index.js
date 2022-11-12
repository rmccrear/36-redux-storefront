import { legacy_createStore } from 'redux';

import { setCatalogAction, setCategoriesAction, setCurrentCategoryAction, viewItemDetailsAction } from './reducers.js';
import reducer from './reducers.js';

const store = legacy_createStore(reducer)

const setCatalog = setCatalogAction;
const setCategories = setCategoriesAction;
const setCurrentCategory = setCurrentCategoryAction
const viewItemDetails = viewItemDetailsAction;
export {
  setCatalog, setCategories, setCurrentCategory, viewItemDetails
};

export default store;
