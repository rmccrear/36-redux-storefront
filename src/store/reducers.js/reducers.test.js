import reducer from '.';
import { items, allCategories } from '../../__fixtures__';

describe('App State Reducers', () => {
  test('should set catalog filled with items.', () => {
    const action = { type: 'SET_CATALOG', payload: {catalog: items} }
    const initialState = reducer();
    const expectedState = { ...initialState, catalog: items };

    const state = reducer(initialState, action);
    expect(state.catalog).toEqual(expectedState.catalog);
  });

  test('should set allCategories', () => {
    const action = { type: 'SET_CATEGORIES', payload: {categories: allCategories} }
    const initialState = reducer();
    const expectedState = { ...initialState, categories: allCategories };

    const state = reducer(initialState, action);
    expect(state.categories).toEqual(expectedState.categories);
  });

  test('should set current category', () => {
    const action = { type: 'VIEW_CATEGORY', payload: {currentCategory: 'electronics'} }
    const initialState = reducer();
    const expectedState = { ...initialState, currentCategory: 'electronics' };

    const state = reducer(initialState, action);
    expect(state.currentCategory).toBe(expectedState.currentCategory);
  });

  test('should add item to cart', () => {
    const action = { type: 'ADD_TO_CART', payload: {item_id: 1} }
    let initialState = reducer();
    const setCatalogAction = { type: 'SET_CATALOG', payload: {catalog: items} }
    initialState = reducer(initialState, setCatalogAction);
    const expectedState = { ...initialState, cart: { 1: {quantity: 1} } };

    const state = reducer(initialState, action);
    expect(state.cart).toEqual(expectedState.cart);
    expect(reducer(state, action).cart).toEqual({ 1: { quantity: 2 } });
  });

  test('should remove item from cart', () => {
    const action = { type: 'ADD_TO_CART', payload: {item_id: 1} }
    let initialState = reducer();
    const setCatalogAction = { type: 'SET_CATALOG', payload: {catalog: items} }
    initialState = reducer(initialState, setCatalogAction);
    const expectedState = { ...initialState, cart: { 1: {quantity: 1} } };

    let state = reducer(initialState, action);
    expect(state.cart).toEqual(expectedState.cart);
    state = reducer(state, action);
    expect(state.cart).toEqual({ 1: { quantity: 2 } });

    const action2 = { type: 'REMOVE_FROM_CART', payload: {item_id: 1} }
    state = reducer(state, action2);
    expect(state.cart).toEqual({ 1: { quantity: 1 } });
    state = reducer(state, action2);
    expect(state.cart).toEqual({ 1: { quantity: 0 } });

  });

  test('should set view item details', () => {
    const item_id = 1;
    const action = { type: 'VIEW_ITEM_DETAILS', payload: { item_id: item_id } };
    const actionSetCatalog = { type: 'SET_CATALOG', payload: { catalog: items } };
    const initialState = reducer();
    const expectedState = { ...initialState, viewingItem: items[0] };

    let state = initialState;
    state = reducer(state, actionSetCatalog);
    state = reducer(state, action);
    expect(state.viewingItem).toEqual(expectedState.viewingItem);
  });

  test('should close item details', () => {
    const action = { type: 'CLOSE_ITEM_DETAILS' };
    const initialState = reducer();
    // const expectedState = { ...initialState, viewingItem: undefined };

    const state = reducer(initialState, action);
    expect(state.viewingItem).toBeFalsy();
  });
  
});