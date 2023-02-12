import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the Footer', () => {
  render(<Footer />);
  expect(screen.getByText(/2023 by Cristina Verdasca/i)).toBeInTheDocument();
});
 