import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { test, expect } from '@jest/globals';

test('renderiza link aprender react', () => {
  render(<App />);
  const linkElement = screen.getByText(/aprender react/i);
  expect(linkElement).toBeInTheDocument();
});
