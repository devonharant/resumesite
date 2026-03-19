import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders app', async () => {
  render(<App />);
  const linkElement = await screen.findByText("Devon Harant");
  expect(linkElement).toBeInTheDocument();
});
