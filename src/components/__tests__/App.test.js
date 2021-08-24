import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
// import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme'

import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

// it('should contain a comment box', () => {
//     render(<App />);
//     const hiElement = screen.getByText(/Comment Box/i);
//     expect(hiElement).toBeInTheDocument()
// })
let wrapper;
beforeEach(() => {
    wrapper  = shallow(<App />);
})

it('should contain a comment box', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
})

it('should contain a comment list', () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
})