import { render, screen } from '@testing-library/react';
import Grid from './Grid';

test('renders Grid', () => {
  render(<Grid />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
