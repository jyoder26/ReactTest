import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

    //reduxImmutableStateInvariant will warn us if the redux state is mutated
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())));
}