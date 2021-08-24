import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = {
        comment: ""
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({comment: ""});
        this.props.saveComment(this.state.comment)
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea
                    value={this.state.comment}
                    onChange={(e) => this.setState({comment: e.target.value})}/>
                <div>
                    <button>Submit</button>
                </div>
            </form>
                <button id="fetch-comments" onClick={this.props.fetchComments}>Fetch comment</button>
            </div>
        )

    }

}

export default connect(null, actions)(CommentBox)