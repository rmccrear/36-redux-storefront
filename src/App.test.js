import { Provider } from 'react-redux';
import store from './store';

import { act, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
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
