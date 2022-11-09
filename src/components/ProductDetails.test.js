import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductDetails from "./ProductDetails";

import { items } from "../__fixtures__";

const closeDetails = jest.fn();
const addToCart = jest.fn();

describe('Product Details Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render Product Details Component', () => {
    const product = items[0];
    render(<ProductDetails product={product} closeDetails={closeDetails} addToCart={ addToCart } />);
    expect(screen.getByText(product.title)).toBeInTheDocument();
  });

  test('should call closeDetails on click', async () => {
    const product = items[0];
    render(<ProductDetails product={product} closeDetails={closeDetails} addToCart={ addToCart } />);
    const button = screen.getByText("X");
    await userEvent.click(button);
    expect(closeDetails).toBeCalled();
  });

  test('should call addToCart on click', async () => {
    const product = items[0];
    render(<ProductDetails product={product} closeDetails={closeDetails} addToCart={ addToCart } />);
    const button = screen.getByText("Add to cart");
    await userEvent.click(button);
    expect(addToCart).toBeCalled();
  });
  
});
