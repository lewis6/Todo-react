import React, {useState} from 'react'

function AddTodo(props) {
    /*
        When we have input fields, usually, you want those field
        as a piece of state of that component
    */

    const [title, setTitle] = useState('');

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle('');
    }

    return (
        <form onSubmit={ onSubmit }style={{ display: 'flex' }}>
            <input type="text" name="title" style={{ flex: '10', padding: '5px' }} placeholder="Add Todo ..."
                value={ title } onChange={ onChange } />
            <input type="submit" value="Submit" className="btn" style={{ flex: '1' }}/>
        </form>
    )
}

export default AddTodo;
