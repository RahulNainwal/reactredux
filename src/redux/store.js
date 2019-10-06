import { createStore } from 'redux';
import postReducer from '../redux/reducers/postReducer'
export const store = createStore(postReducer);