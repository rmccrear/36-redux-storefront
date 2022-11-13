import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import { CartInner, buildCart } from "./Cart";

import { items } from '../__fixtures__';

describe('CartInner Component', () => {

  test('should build cart object from cart and catalog', () => {
    const cart = {
      1: { quantity: 1 },
      2: { quantity: 2 }
    };
    const catalog = items;
    const cartObj = buildCart(cart, catalog);
    const expectedObject = 
      {...catalog[0], ...cart[catalog[0].id]}
    ;
    expect(cartObj).toEqual(expect.arrayContaining([expectedObject]));
  });

  test('should render CartInner Component', () => {
    const cartInnerProps = {
      catalog: items,
      cart: {
        1: {quantity: 1},
        2: {quantity: 2}
      }
    };
    render(<CartInner {...cartInnerProps} />); 
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.queryByText('Item 3')).not.toBeInTheDocument();
  });
});
