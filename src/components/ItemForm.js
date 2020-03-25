import React , { useState } from 'react';
import { connect } from 'react-redux';
import { addTasks } from '../actions/index'

function ItemForm () {

    const [ tasks, setTasks ] = useState('')

    const handleChange = (event) => {
        if(!event.target.value.trim()) {
            return 
        }
        const text = event.target.value;
        setTasks(text)
    }
 
    const addTasks = ({key}) => { 
        if(key === 'Enter') {
          addTasks(tasks)
          setTasks('')
        }
    }


    return (
        <input 
        className="input__form"
        placeholder="Введите название задачи"
        onChange = {handleChange}
        value={tasks}
        onKeyPress={addTasks}/>
    )
}



// const mapDispatchToProps = {
//     getAddress
// };



export default connect(null , {addTasks} )(ItemForm)