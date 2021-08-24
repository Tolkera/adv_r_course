import React from "react";
import { mount } from 'enzyme'
import CommentList from "components/CommentList";
import Root from 'Root';

let wrapper;
beforeEach(()=>{
    const initialState = {
        comments: ['comment 1', 'comment 2']
    }
    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>

    );
})

afterEach(()=> {
    wrapper.unmount();
})

it('creates one LI per comment', ()=>{
    expect(wrapper.find('li').length).toEqual(2);
})

it('shows correct text for comments',()=>{
    expect(wrapper.render().text()).toContain('comment 1');
    expect(wrapper.render().text()).toContain('comment 2')

})
