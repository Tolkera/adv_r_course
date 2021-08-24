import commentsReducer  from 'reducers/comments'
import {SAVE_COMMENT} from "actions/types";

it('handles actions of type SAVE COMMENT', ()=>{
    const state = commentsReducer([],{type: SAVE_COMMENT, payload: 'comment'});
    expect(state.length).toEqual(1);
})

it('handles actions with unknown type', ()=>{
    const state = commentsReducer([],{});
    expect(state).toEqual([]);
})