import { legacy_createStore } from 'redux';

import { setCatalogAction, setCategoriesAction, setCurrentCategoryAction  } from './reducers.js';
import reducer from './reducers.js';

const store = legacy_createStore(reducer)

const setCatalog = setCatalogAction;
const setCategories = setCategoriesAction;
const setCurrentCategory = setCurrentCategoryAction
export {
  setCatalog, setCategories, setCurrentCategory
};

export default store;
