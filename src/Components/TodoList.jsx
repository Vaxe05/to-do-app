import React, {useState} from 'react'

function ToDoList(){
    const[todos, setTodos] = useState([
        "walk the dog",
        "order a pizza",
        "hit the gym"
    ]);
    const [newTodo, setNewTodo] = useState("")

    function titleHandler(){

    }
    function addTodo(){
        if(newTodo.trim() !== ""){
            setTodos(t => [...t, newTodo]);

            setNewTodo("");
        }
    }
    function deleteTodo(index){
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }
    function moveTodoup(index){
        if(index > 0){
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index - 1]] =
            [updatedTodos[index - 1], updatedTodos[index]];
            setTodos(updatedTodos)
        }
    }
    function moveTodoDown(index){
        if(index < todos.length - 1){
            const updatedTodos = [...todos];
            [updatedTodos[index], updatedTodos[index + 1]] =
            [updatedTodos[index + 1], updatedTodos[index]];
            setTodos(updatedTodos)
        }
    }
    function handleInputChange(event){
        setNewTodo(event.target.value);
    }
    return(
        <ol className="todo-list">
            <div className='create-tasks'>
                <input 
                className='task-input'
                type="text"
                onChange={handleInputChange} />
                <button className='add-button' onClick={addTodo}>ADD</button>
            </div>
            <h1>What to do today?</h1>
            {todos.map((todo, index) =>
                <li key={index} className="to-do">
                <h2 onClick={titleHandler}>{todo}</h2>
                <div>
                <button className='delete-button' onClick={() => deleteTodo(index)}>🗑️</button>
                <button className='up-button' onClick={() => moveTodoup(index)}>⬆️</button>
                <button className='down-button' onClick={() => moveTodoDown(index)}>⬇️</button>
                </div>
                </li>
            )}
        </ol>
    )
}

export default ToDoList