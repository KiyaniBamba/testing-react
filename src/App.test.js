import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';



// before each step we clean up and wrappe our app

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<App />);
});

describe('App component', () => {
  test('matches the snapshot!', () => {
    expect(wrapper.container).toMatchSnapshot();
  });
});