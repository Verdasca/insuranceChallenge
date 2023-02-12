import React from 'react';
import { render, screen } from '@testing-library/react';
import PieChartComponent from './PieChartComponent';

test('renders the PieChartComponent', () => {
  render(<PieChartComponent salesChart={[]} />);
  expect(screen.getByText(/No insurance sales/i)).toBeInTheDocument();
});
 