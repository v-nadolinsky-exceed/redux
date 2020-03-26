import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

function ItemList({ tasks: tasksFromState}) {

    return(
        <>
           { tasksFromState.map(task => <Item key = {task.id} {...task}/>)}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.items
    }
};

export default connect(mapStateToProps)(ItemList)