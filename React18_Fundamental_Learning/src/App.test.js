import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the search input', () => {
  render(<App />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});
