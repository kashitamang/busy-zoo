import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Toggle Zoo/i);
  expect(linkElement).toBeInTheDocument();
});

test('if the user clicks on the giraffe button, there should be one more giraffe on the screen', () => {
  render(<App />);
  const giraffeElementsAtLoad = screen.getAllByText(/🦒/i);

  // initially there should be one giraffe
  expect(giraffeElementsAtLoad.length).toBe(1);

  const giraffeButton = screen.getByText(/giraffe/i);

  fireEvent.click(giraffeButton);

  const giraffeElementsAfterClick = screen.getAllByText(/🦒/i);

  expect(giraffeElementsAfterClick.length).toBe(2);
});

test('if the user clicks on the dolphin button, there should be one more dolphin on the screen', () => {
  render(<App />);
  const giraffeElementsAtLoad = screen.getAllByText(/🦒/i);

  // initially there should be one giraffe
  expect(giraffeElementsAtLoad.length).toBe(1);

  const giraffeButton = screen.getByText(/giraffe/i);

  fireEvent.click(giraffeButton);

  const giraffeElementsAfterClick = screen.getAllByText(/🦒/i);

  expect(giraffeElementsAfterClick.length).toBe(2);
});