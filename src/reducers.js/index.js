
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

function setCategories(categoryState, categories) {
  return categories;
}

function setCurrentCategory(currentCategoryState, currentCategory) {
  return currentCategory;
}

function addToCart(cart, item_id) {
  if (cart[item_id]) {
    return { ...cart, [item_id]: { quantity: cart[item_id].quantity + 1 } };
  } else {
    return { ...cart, [item_id]: { quantity: 1 } };
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

function viewItemDetails(viewItemDetailsState, itemId) {
  return itemId;
}

export const reducer = (state = initialState, action) => { 
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