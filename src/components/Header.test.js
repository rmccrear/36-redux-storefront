import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from './Header';
import { legacy_createStore } from 'redux';

import { items } from '../__fixtures__';
import reducer from '../store/reducers.js';

const MockReduxWrapper = (props) => {
  const initialState = {
    catalog: items,
    cart: {
      1: {quantity: 3},
      2: {quantity: 2},
    }
  };
  const store = legacy_createStore(reducer, initialState);
  return (
    <Provider store={store}>{props.children}</Provider>
  )
}

describe('Header', () => {
  test('should render a Header component', () => {
    const shopName = "Fancy Teas";
    render(<Header shopName={shopName} />, {wrapper: MockReduxWrapper});
    expect(screen.getByText(shopName)).toBeInTheDocument();
  });
  
});