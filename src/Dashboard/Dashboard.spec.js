import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Controls />)
})

describe('Control Toggles On Click', () => {
  it('Indicator is locked when gate is locked', () => {
      expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
      expect(wrapper.queryByText(/locked/i)).toBeVisible();
  });
});