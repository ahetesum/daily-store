import { getDefaultNormalizer, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
//My name is Ahetesum Ali my friend Name is Rakesh. We pursue CSE. We are from WBUT 
