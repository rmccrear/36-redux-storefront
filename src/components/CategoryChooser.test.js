import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CategoryChooser from "./CategoryChooser";

import { allCategories } from '../__fixtures__';

const selectCategory = jest.fn();

describe('CategoryChooser Component', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('should render a CategoryChooser Component', () => {
    render(<CategoryChooser categories={allCategories} selectCategory={ selectCategory } />)
    expect(screen.getByText(allCategories[0].displayName)).toBeInTheDocument();
    expect(screen.getByText(allCategories[1].displayName)).toBeInTheDocument();
  });

  test('should call selectCategory when clicked', async () => {
    render(<CategoryChooser categories={allCategories} selectCategory={ selectCategory } />)
    const cat1 = screen.getByText(allCategories[1].displayName);
    await userEvent.click(cat1);
    expect(selectCategory).toBeCalledWith(allCategories[1].slug);
  });
});