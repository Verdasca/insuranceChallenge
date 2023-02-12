import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the App', () => {
  const {container} = render(<App />);
  const app = container.getElementsByClassName('App');
  expect(app.length).toBe(1);
});
 