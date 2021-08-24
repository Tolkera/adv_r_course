import React from "react";
import { mount } from 'enzyme'
import CommentBox from "components/CommentBox";
import Root from 'Root';

let wrapper;
beforeEach(()=>{
    wrapper = mount(
        <Root>
            <CommentBox/>
        </Root>

    );
})

afterEach(()=> {
    wrapper.unmount();
})
it('has textarea and  2 buttons', ()=>{
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2)
})

describe('textarea shenanigans', function () {
    beforeEach(()=>{
        wrapper.find('textarea').simulate('change', {
            target: {
                value: 'new comment'
            }
        })
        wrapper.update();
    })
    it('has textarea and user can type in it', ()=> {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
    })

    it('clears the textarea after submitting the form', ()=> {
        wrapper.find('form').simulate('submit',{})
        wrapper.update();
        expect(wrapper.find('textarea').prop('value')).toEqual('')
    })

});

