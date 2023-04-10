import { RedBtn, BlueBtn, SmBtn, LgBtn } from '../stories/Button.stories';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

/* test('RedBtn을 랜더링할 수 있다.', () => {
  render(<RedBtn {...RedBtn.args} />);
  expect(screen.getByRole('button')).toHaveTextContent(/Red/i);
  expect(screen.getByRole('button')).toHaveStyle('backgroundColor:red');
});

test('BlueBtn을 랜더링할 수 있다.', () => {
  render(<BlueBtn {...BlueBtn.args} />);
  expect(screen.getByRole('button')).toHaveTextContent(/Blue/i);
  expect(screen.getByRole('button')).toHaveStyle('backgroundColor:');
}); */

test('SmBtn을 랜더링할 수 있다.', () => {
  render(<SmBtn {...SmBtn.args} />);
  expect(screen.getByRole('button')).toHaveTextContent(/Sm Btn/i);
  expect(screen.getByRole('button')).toHaveStyle('backgroundColor:gray');
});

test('LgBtn을 랜더링할 수 있다.', () => {
  render(<LgBtn {...LgBtn.args} />);
  expect(screen.getByRole('button')).toHaveTextContent(/Lg Btn/i);
  expect(screen.getByRole('button')).toHaveStyle('backgroundColor:gray');
});
