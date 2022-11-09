import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ProductList from "./ProductList";

import { items } from '../__fixtures__';

const viewDetails = jest.fn();
const addToCart = jest.fn();

describe('ProductList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should render ProductList Component', () => {
    render(<ProductList products={items} />);
    expect(screen.getAllByText('details...').length).toBe(items.length);
  });

  test('should add to cart on click', async () => {
    render(<ProductList products={items} viewDetails={viewDetails} addToCart={ addToCart } />);
    const button = screen.getAllByText('Add to cart')[0];
    await userEvent.click(button);
    expect(addToCart).toBeCalledWith(items[0].id);
  });

  test('should viewDetails on click', async () => {
    render(<ProductList products={items} viewDetails={viewDetails} addToCart={ addToCart } />);
    const button = screen.getAllByText('details...')[0];
    await userEvent.click(button);
    expect(viewDetails).toBeCalledWith(items[0].id);
  });
  
});