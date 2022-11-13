
const initialState = {
  catalog: [],
  categories: [],
  currentCategory: 'ALL',
  cart: {},
  viewingItem: null,
  listOffset: 0,
  listPaginationLength: 10
};

function setCatalog(catalogState, catalogItems) {
  return catalogItems;
}

export function setCatalogAction(catalogItems) {
  return {
    type: 'SET_CATALOG',
    payload: {
      catalog: catalogItems
    }
  }
}

function setCategories(categoryState, categories) {
  return categories;
}

export function setCategoriesAction(categories) {
  return {
    type: 'SET_CATEGORIES',
    payload: {
      categories
    }
  }
}

function setCurrentCategory(currentCategoryState, currentCategory) {
  return currentCategory;
}

export function setCurrentCategoryAction(currentCategory) {
  return {
    type: 'VIEW_CATEGORY',
    payload: { currentCategory }
  }
}


function addToCart(cart, item_id) {
  if (cart[item_id]) {
    return { ...cart, [item_id]: { quantity: cart[item_id].quantity + 1 } };
  } else {
    return { ...cart, [item_id]: { quantity: 1 } };
  }
}

function addToCartDecrementInventory(state, item_id) {
  const catalog = state.catalog;
  const cart = state.cart;
  const item = checkInventory(catalog, item_id);
  if (item && item.inventory > 0){
    const newCart = addToCart(cart, item.id);
    const newCatalog = decrementInventory(catalog, item.id);
    return {...state, cart: newCart, catalog: newCatalog}
  }
  return state;
}

function removeFromCartIncrementInventory(state, item_id) {
  const catalog = state.catalog;
  const cart = state.cart;
  const item = catalog.find(item => item.id === item_id);
  if (item){
    const newCart = removeFromCart(cart, item.id);
    const newCatalog = incrementInventory(catalog, item.id);
    return {...state, cart: newCart, catalog: newCatalog}
  }
  return state;
}

export function addToCartAction(item_id) {
  return {
    type: 'ADD_TO_CART',
    payload: { item_id }
  }
}

function checkInventory(catalog, item_id) {
  const item = catalog.find(item => item.id === item_id);
  if (item) {
    if (item.inventory > 0) {
      return item;
    }
  }
  return false;
}

function decrementInventory(catalog, item_id) {
  const idx = catalog.findIndex(item => item.id === item_id);
  if (idx !== -1) {
    const item = { ...catalog[idx], inventory: catalog[idx].inventory-1};
    const newCatalog = [...catalog];
    newCatalog[idx] = item;
    return newCatalog;
  }
  return catalog;
}

function incrementInventory(catalog, item_id) {
  const idx = catalog.findIndex(item => item.id === item_id);
  if (idx !== -1) {
    const item = { ...catalog[idx], inventory: catalog[idx].inventory+1};
    const newCatalog = [...catalog];
    newCatalog[idx] = item;
    return newCatalog;
  }
  return catalog;
}

function removeFromCart(cart, item_id) {
  if (cart[item_id] && cart[item_id].quantity>0) {
    return {
      ...cart, [item_id]: { quantity: cart[item_id].quantity - 1 }
    }
  } else {
    return cart;
  }
}

export function removeFromCartAction(item_id) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: { item_id }
  }
}

export function closeCartAction(){
  return {
    type: 'CLOSE_CART'
  }
}

export function openCartAction(){
  return {
    type: 'OPEN_CART'
  }
}

function viewItemDetails(state, item_id) {
  const catalog = state.catalog;
  const product = catalog.find(p => p.id === item_id);
  return product;
}

export function viewItemDetailsAction(item_id) {
  return {
    type: 'VIEW_ITEM_DETAILS',
    payload: { item_id }
  }
}

export default function reducer (state = initialState, action) { 
  if (!action) return state;
  switch (action.type) {
    case 'SET_CATALOG':
      return {
        ...state,
        catalog: setCatalog(state.catalog, action.payload.catalog)
      }
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: setCategories(state.categories, action.payload.categories)
      }
    case 'VIEW_CATEGORY':
      return {
        ...state,
        currentCategory: setCurrentCategory(state.currentCategory, action.payload.currentCategory)
      }
    case 'ADD_TO_CART':
      return addToCartDecrementInventory(state, action.payload.item_id);
      // return {
      //   ...state,
      //   cart: addToCart(state.cart, action.payload.item_id)
      // }
    case 'REMOVE_FROM_CART':
      return removeFromCartIncrementInventory(state, action.payload.item_id);
      // return {
      //   ...state,
      //   cart: removeFromCart(state.cart, action.payload.item_id)
      // }
    case 'VIEW_ITEM_DETAILS':
      return {
        ...state,
        viewingItem: viewItemDetails(state, action.payload.item_id)
      }
    case 'CLOSE_CART':
      return {
        ...state,
        cartIsOpen: false
      }
    case 'OPEN_CART':
      return {
        ...state,
        cartIsOpen: true
      }

    default:
      return state;
  }

}