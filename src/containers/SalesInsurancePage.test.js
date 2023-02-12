import React from 'react';
import { render, screen } from '@testing-library/react';
import SalesInsurancePage from './SalesInsurancePage';

test('renders the SalesInsurancePage', () => {
  render(<SalesInsurancePage />);
  expect(screen.getByText('Insurance Sale')).toBeInTheDocument();
});
 