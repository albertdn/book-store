import React from 'react';
import { connect } from 'react-redux';
import { Header, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import BookForm from './bookForm';

import * as bookActions from '../../actions/bookActions';

class BookPage extends React.Component {
    //how to bind alternatively
    submitBook = (input) => {
        this.props.createBook(input);
    }

    deleteBook = (id) => {
        this.props.deleteBook(id);
    }
    render() {
        return (
            <div>
                <Header as="h2">Book</Header>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.books.map((book) =>
                            <Table.Row>
                                <Table.Cell key={book._id}>{book.title}</Table.Cell>
                                <Table.Cell><Link to={`/book/${book._id}`}>View  </Link>                                
                                    <Button onClick={e => {
                                        //preventDefault is important
                                        e.preventDefault();                                    
                                        this.deleteBook(book._id);
                                    }}>Delete</Button></Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
                <Header as="h3">Book Form</Header>
                {/*ATTENTION, NOT USING .bind !!!*/}
                <BookForm submitBook={this.submitBook} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        books: state.books
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createBook: book => dispatch(bookActions.createBook(book)),
        //it is can return more than one lol
        deleteBook: id => dispatch(bookActions.deleteBook(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);