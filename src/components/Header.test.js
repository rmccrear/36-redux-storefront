import { screen, render } from '@testing-library/react';
import Header from './Header';


describe('Header', () => {
  test('should render a Header component', () => {
    const storeName = "Fancy Teas";
    render(<Header shopName={storeName}/>);
    expect(screen.getByText(storeName)).toBeInTheDocument();
  });
  
});