import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Controls />)
})


describe('Control Toggles On Click ', () => {
    
    it('clicking lock gate button doesn\'t open it', () => {
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
    expect(wrapper.queryByText(/close gate/i)).toBeVisible();
    expect(wrapper.queryByText(/open gate/i)).not.toBeInTheDocument();
    })
})
