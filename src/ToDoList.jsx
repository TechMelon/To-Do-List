import React, { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast","Take a shower","walk the dog"]);
    const [newTasks, setNewTasks] = useState("");

    function handleinputChange(event) {
        setNewTasks(event.target.value)
    }
    function addTask() {
        if (newTasks.trim() !== "") {
            setTasks(t => [...t,newTasks]);
        setNewTasks("");
        }
    }
    function deleteTasks(index) {
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index- 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter the task...' 
                value={newTasks} 
                onChange={handleinputChange} />
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