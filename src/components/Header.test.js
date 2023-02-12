import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the Header', () => {
  render(<Header />);
  expect(screen.getByText('Simplesurance')).toBeInTheDocument();
});
 