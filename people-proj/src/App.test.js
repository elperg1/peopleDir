import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const headerElement = screen.getByText(/People Project/i);
  expect(headerElement).toBeInTheDocument();
});
