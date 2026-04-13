import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the post form submit button', () => {
  render(<App />);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});
