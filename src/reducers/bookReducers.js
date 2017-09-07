import { CREATE_BOOK_SUCCESS, DELETE_BOOK_SUCCESS, FETCH_BOOK_BY_ID_SUCCESS, FETCH_BOOKS_SUCCESS } from '../actions/actionTypes';

export const booksReducers = (state = [], action) => {
    switch (action.type) {
        case CREATE_BOOK_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.book)
            ];
        case FETCH_BOOKS_SUCCESS:
            return action.books;
        case DELETE_BOOK_SUCCESS:
            //it is as simple as this for crying out loud :""
            //books is now state (see logger for more)
            return state.filter(books => books._id !== action.id);
        default:
            return state;
    }
};

export const bookReducers = (state = [], action) => {
    switch (action.type) {
        case FETCH_BOOK_BY_ID_SUCCESS:
            return action.book;
        default:
            return state;
    }
};