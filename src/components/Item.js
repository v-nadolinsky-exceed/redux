import React , { useState , useEffect } from 'react';
import { connect } from 'react-redux';
import { removeTasks, changeTasks } from '../actions/index'

function Item({ id , text , removeTask , changeTask }) {

    const [ taskValue, setTaskValue ] =  useState(text)

    const handleChange = ({ target : {value} }) => {
        setTaskValue(value)
    }

    const removeOnClick = (id) => {
        removeTask(id)
    }

    const saveChengedTask = ({ key }) => {
        if (key === 'Enter') {
            changeTask( id, taskValue)
            console.log(id)
        }
    }

    useEffect(()=> {
        console.log(taskValue)
    })

    return(
        <>
            <input 
            type = "text"
            onChange = {handleChange}
            value = {taskValue}
            onKeyPress = { saveChengedTask }
             />
            <button onClick = { () => removeOnClick(id) } > x </button>

        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: (id => {
            dispatch(removeTasks(id))
        }),
        changeTask: ((id,text) => {
            dispatch(changeTasks(id,text))
        })
    }
};

export default connect(null , mapDispatchToProps )(Item)