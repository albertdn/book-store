import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import BookDetail from './bookDetail';
// harus import * entah kenapa -__-
import * as bookActions from '../../actions/bookActions';

class BookDetailPage extends React.Component {
    constructor(props) {
        super(props);
    }

    //call as soon as component load
    componentDidMount() {
        //it use match.params from router now 
        this.props.fetchBookById(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Header as="h2">Book Detail</Header>
                <BookDetail book={this.props.book}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        book: state.book
    }
}

const mapDispatchToProps = (dispatch) => {
    return {        
        fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId))
    }
}

//gakboleh kebalik stateToProps duluuu -__-
export default connect(mapStateToProps, mapDispatchToProps)(BookDetailPage);