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
    render(<ProductList products={items} currentCategory='ALL'/>);
    expect(screen.getAllByText('details...').length).toBe(items.length);
  });

  test('should add to cart on click', async () => {
    render(<ProductList products={items} currentCategory='ALL' viewDetails={viewDetails} addToCart={ addToCart } />);
    const button = screen.getAllByText('Add to cart')[0];
    await userEvent.click(button);
    expect(addToCart).toBeCalledWith(items[0].id);
  });

  test('should viewDetails on click', async () => {
    render(<ProductList products={items}  currentCategory='ALL' viewDetails={viewDetails} addToCart={ addToCart } />);
    const button = screen.getAllByText('details...')[0];
    await userEvent.click(button);
    expect(viewDetails).toBeCalledWith(items[0].id);
  });

  test('should filter by currentCategory', async () => {
    render(<ProductList products={items} currentCategory={items[0].category} viewDetails={viewDetails} addToCart={ addToCart } />);
    expect(screen.getByText(items[0].title)).toBeInTheDocument();
    expect(screen.queryByText(items[2].title)).not.toBeInTheDocument();
  });

  test('should filter by currentCategory 2', async () => {
    render(<ProductList products={items} currentCategory={items[2].category} viewDetails={viewDetails} addToCart={ addToCart } />);
    expect(screen.queryByText(items[0].title)).not.toBeInTheDocument();
    expect(screen.getByText(items[2].title)).toBeInTheDocument();
  });
  
});