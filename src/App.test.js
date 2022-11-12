import { Provider } from 'react-redux';
import store from './store';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={ store }>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Fancy Tea/i);
  expect(linkElement).toBeInTheDocument();
});
