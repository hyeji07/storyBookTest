import { RedBtn, BlueBtn, SmBtn, LgBtn } from '../stories/Button.stories';

import { render, screen } from '@testing-library/react';

const mainColor = 'brown';

test('RedButton을 랜더링할 수 있다.', () => {
  render(<RedBtn {...RedBtn.args} />);
  expect(screen.getByRole('button')).toHaveTextContent(/Red/i);
  expect(screen.getByRole('button')).toHaveStyle('backgroundColor:red');
});
