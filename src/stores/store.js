import { createStore } from 'redux';
import reducer from '../reducers/reducer';

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, 
      window.devToolsExtension && window.devToolsExtension()
    );
    return store;
}