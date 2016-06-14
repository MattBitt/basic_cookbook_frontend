import { connect } from 'react-redux';
import * as components from '../components/Todo/Todo'
import { addTodo, toggleTodo } from '../actions/actions';

export const TodoList = connect(
    function mapStateToProps(state) {
        return { todos: state };
    },
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id))
        };
    }
    )(components.TodoList);