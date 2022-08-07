import React, { useState } from "react";
import './Tasks.css';

const Tasks = props => {

    const [editTask, setEditTask] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const editTaskHandler = e => {
        setEditTask(e.target.value);
    }





    return (<div className="tasks">
        {props.tasks.map(task =>
            <div  className="task" key={task.id}>
                <div className="task_name_edit">
                    <div className="center" style={{display : isEdit ? 'none' : 'block'}}>
                        {task.taskName}
                    </div>

                    <input
                        type='text'
                        placeholder="edit..."
                        onChange={editTaskHandler}
                        style={{display : !isEdit ? 'none' : 'block'}}
                    ></input>
                </div>

                <div className="btns">
                    <button
                        className="btn edit"
                        onClick={() => {
                            if(editTask.trim().length > 0){
                                props.onEdit(task.id, editTask)
                            }
                            setIsEdit(!isEdit);
                        }}
                    >edit</button>
                    <button 
                        className="btn remove"
                        onClick={() => {
                        props.onDelete(task.id)
                    }}>remove</button>
                </div>
            </div>
        )}
    </div>);
}

export default Tasks;