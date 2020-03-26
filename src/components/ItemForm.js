import React , { useState } from 'react';
import { connect } from 'react-redux';
import { addTasks } from '../actions/index'

function ItemForm ({ addTask }) {

    const [ tasks, setTasks ] = useState('')

    const handleChange = (event) => {
        if(!event.target.value.trim()) {
            return 
        }
        const text = event.target.value;
        setTasks(text)
    }
 
    const handleKeyPress = ({key, target: { value }}) => { 
        if(key === 'Enter') {
          addTask(value)
          setTasks('')
        }
    }


    return (
        <input 
        className="input__form"
        placeholder="Введите название задачи"
        onChange = {handleChange}
        value={tasks}
        onKeyPress={handleKeyPress}/>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (text => {
            dispatch(addTasks(text))
        })
    }
};


export default connect(null , mapDispatchToProps )(ItemForm)