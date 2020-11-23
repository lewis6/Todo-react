import React, { Component } from 'react'
import PropTypes from 'prop-types';


function TodoItem(props) {
/*     function getStyle() {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }
    }; */

    const getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }
    };

    //Destructuring
    const { id, title } = props.todo;
    //End Destructuring

    return(
        <div style={ getStyle() }> {/* For inline styling use double curly braces */}
            <p>
                <input type="checkbox" onChange={ props.markComplete.bind(this, id) }></input>
                { title }
                <button onClick={ props.deleteTodo.bind(this, id)} style= { btnStyle }>X</button>
            </p>
        </div>
    );
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#FF0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
