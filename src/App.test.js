import { Provider } from 'react-redux';
import store from './store';

import { act, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  await act(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  });
  const linkElement = screen.getByText(/Fancy Tea/i);
  expect(linkElement).toBeInTheDocument();
});
