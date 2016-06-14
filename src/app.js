import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { TodoList } from './containers/containers';
import configureStore from './stores/store';

const store = configureStore();



// const dummyTodos = List([
  // Map({ id: 0, isDone: true,  text: 'make components' }),
  // Map({ id: 1, isDone: false, text: 'design actions' }),
  // Map({ id: 2, isDone: false, text: 'implement reducer' }),
  // Map({ id: 3, isDone: false, text: 'connect components' })
// ]);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
); 