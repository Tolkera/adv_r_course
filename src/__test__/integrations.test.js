import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from "../components/App";
import moxios from 'moxios';

beforeEach(()=>{
    moxios.install();
})

afterEach(()=>{
    moxios.uninstall();
})

it('can fetch a list of comments and display them', (done)=>{
    const wrapper = mount(
        <Root>
            <App/>
        </Root>
    );

    wrapper.find('#fetch-comments').simulate('click');

    moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
            status: 200,
            response: [{name: 'co 1'}, {name: 'co 2'}]
        }).then(function (res) {
            wrapper.update();
            expect(wrapper.find('li').length).toEqual(2);
            done();
        });
    })

})
