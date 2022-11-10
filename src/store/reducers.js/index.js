
const initialState = {
  catalog: [],
  categories: [],
  currentCategory: 'ALL',
  cart: [],
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

export function addToCartAction(item_id) {
  return {
    type: 'ADD_TO_CART',
    payload: { item_id }
  }
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

function viewItemDetails(viewItemDetailsState, item_id) {
  return item_id;
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
      return {
        ...state,
        cart: addToCart(state.cart, action.payload.item_id)
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: removeFromCart(state.cart, action.payload.item_id)
      }
    case 'VIEW_ITEM_DETAILS':
      return {
        ...state,
        viewingItem: viewItemDetails(state.viewingItem, action.payload.item_id)
      }

    default:
      return state;
  }

}