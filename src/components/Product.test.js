import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "./Product";

import { items } from '../__fixtures__';

const viewDetails = jest.fn();
const addToCart = jest.fn();

describe('Product Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('should render Product Component', () => {
    const product = items[0];
    render(<Product product={product} viewDetails={viewDetails} />);
    expect(screen.getByText(product.title)).toBeInTheDocument();
  });

  test('should call viewDetails on click', async () => {
    const product = items[0];
    render(<Product product={product} viewDetails={viewDetails} />);
    const button = screen.getByText('details...');
    await userEvent.click(button);
    expect(viewDetails).toBeCalledWith(product.id);
  });

  test('should call add to cart on click', async () => {
    const product = items[0];
    render(<Product product={product} viewDetails={viewDetails} addToCart={ addToCart } />);
    const button = screen.getByText('Add to cart');
    await userEvent.click(button);
    expect(addToCart).toBeCalledWith(product.id);
  });
});
