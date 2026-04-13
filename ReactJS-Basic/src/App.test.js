import { render, screen } from '@testing-library/react';
jest.mock('./components/PostForm', () => function MockPostForm() {
  return <button type="button">Submit</button>;
});
import App from './App';

test('renders the post form submit button', () => {
  render(<App />);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});
