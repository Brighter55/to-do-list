import React, { useState } from "react"

function ToDoList() {
    const [tasks, setTasks] = useState(["eat", "shower"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask(event) {
        if (newTask != "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function handleDelete(index) { // index of element to be deleted
        let newTasks = tasks.filter((task) => task != tasks[index]);
        setTasks(newTasks);
    }

    function handleMoveUp(index) {
        if (index > 0) {
            let newTasks = [...tasks];
            let temp = newTasks[index - 1]
            newTasks[index - 1] = newTasks[index];
            newTasks[index] = temp;
            setTasks(newTasks);
        }
    }

    function handleMoveDown(index) {
        if (index != tasks.length - 1) {
            let newTasks = [...tasks];
            let temp = newTasks[index + 1];
            newTasks[index + 1] = newTasks[index];
            newTasks[index] = temp;
            setTasks(newTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-do-list app</h1>
            <div className="input-button">
                <input value={newTask} onChange={handleInputChange} className="input-bar" />
                <button onClick={handleAddTask} className="add-button">Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => <li key={index}>{task} <button className="buttons" onClick={() => handleDelete(index)}>Delete</button><button className="buttons" onClick={() => handleMoveUp(index)}>Move Up</button><button  className="buttons" onClick={() => handleMoveDown(index)}>Move Down</button></li>)}
            </ol>
        </div>
    );
}

export default ToDoList
