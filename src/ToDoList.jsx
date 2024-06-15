import React, { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast","Take a shower","walk the dog"]);
    const [newTasks, setNewTasks] = useState("");

    function handlezinputChange(event) {
        setNewTasks(event.target.value)
    }
    function addTask() {
        
    }
    function deleteTasks(index) {
        
    }
    function moveTaskUp(index) {
        
    }
    function moveTaskDown(index) {
        
    }

    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter the task...' 
                value={newTasks} 
                onChange={handlezinputChange} />
                <button className="add-button" onClick={addTask}>
                    
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task,index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-btn' onClick={() => deleteTasks(index)}>Delete</button>
                    <button className='move-btn' onClick={() => moveTaskUp(index)}>Up</button>
                    <button className='down-btn' onClick={() => moveTaskDown(index)}>Down</button>
                </li>
            )}
            </ol>
        </div>
    );
}
export default ToDoList