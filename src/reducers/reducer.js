import { List, Map } from 'immutable';

const init = List([]);

export default function(todos=init, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return todos.push(Map(action.payload));
        
        case 'TOGGLE_TODO':
        {console.log(todos)}
            return todos.map(t => {
                if(t.get('id') === action.payload) {
                    return t.update('isDone', isDone => !isDone);
                } else {
                    return t;
                }
            });
        
        case 'DELETE_TODO':
        {console.log(todos)}
            return todos.map(t => {
                if(t.get('id') === action.payload) {
                    return t.update('isDone', isDone => !isDone);
                } else {
                    return t;
                }
            });
        
        
        default:
            return todos;
    }
}