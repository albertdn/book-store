import Axios from 'axios';
import * as actionTypes from './actionTypes';

const url = "http://localhost:8000/api"

export const createBookSuccess = (book) => {
    return {
        type: actionTypes.CREATE_BOOK_SUCCESS,
        book
    }
};

export const fetchBooksSuccess = (books) => {
    return {
        type: actionTypes.FETCH_BOOKS_SUCCESS,
        books
    }
};

export const deleteBookSuccess = (id) => {
    //this will become action.id
    //careful not to misspell type static
    return {
        type: actionTypes.DELETE_BOOK_SUCCESS,
        id
    }
}

export const fetchBookByIdSuccess = (book) => {
    return {
        type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
        book
    }
}

export const fetchBooks = () => {
    return (dispatch) => {
        return Axios.get(url + "/books")
            .then(response => {
                dispatch(fetchBooksSuccess(response.data))
            })
            .catch(error => {
                //can dispatch fetchBookError here
                throw (error);
            });
    };
};

export const fetchBookById = (id) => {
    return (dispatch) => {
        return Axios.get(url + '/book/'+id)
            .then(response => {
                dispatch(fetchBookByIdSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            })
    }
}

export const createBook = (book) => {
    return (dispatch) => {
        return Axios.post(url + "/book", book)
            .then(response => {
                dispatch(createBookSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const deleteBook = (bookId) => {
    return (dispatch) => {
        //alternatively you can use /book/id and catch /book/:id params at backend
        return Axios.delete(url + "/book?id=" + bookId)
            .then(response => {
                dispatch(deleteBookSuccess(bookId))
            })
            .catch(error => {
                throw (error);
            })
    };
};

