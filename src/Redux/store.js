import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initState = {
    //có thể khai báo ở đây or ở bên reducer
    // carts:[],
};

export default function configureStore(initialState= initState) {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
