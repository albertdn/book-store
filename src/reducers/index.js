import { combineReducers } from 'redux';
import { booksReducers, bookReducers} from './bookReducers';

export default combineReducers({
    books:booksReducers,
    book:bookReducers
});