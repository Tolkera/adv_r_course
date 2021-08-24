import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {
    buildCommentList(){
        return(
            this.props.comments.map(item => <li key={item}>{item}</li>)
        )
    }
    render(){
        return(
            <ul>
                {this.buildCommentList()}
            </ul>
        )
    }
}
function mapStateToProps(state){
    return {
        comments: state.comments
    }
}
export default connect(mapStateToProps)(CommentList)