import React, { useEffect, useState } from 'react'
const Todolist = () => {
    //this useState is for holding all the tasks
    const [todos, setTtodos] = useState([]);
    //this useState is for handling the form
    const [newTodo, setNewTodo] = useState();
    /*const handleInput = (e) => {
        const { name, value } = e.target;
        setNewTodo({ ...newTodo, [name]: value });
        console.log(newTodo);
    } */
    //function that get the data from the input field
    const Addtodo = () => {
        let myTodos = [...todos, { todo: newTodo, id: Date.now() }];
        console.log(myTodos);
        //clearing the input field, after submiting the form
        setNewTodo("");
        //calling the local Storage function
        saveData(myTodos);
    }
    //making a function the stores the data into localStorage
    const saveData = (newTask) => {
        /*calling the localStorage to get the data of input field, convert the data into string, and then save 
        the data into localStorage */
        localStorage.setItem("tasks", JSON.stringify(newTask));
    }
    //we are using useEffect just to show the list of all tasks instantly when my Todolist component will run
    useEffect(() => {
        if (localStorage.getItem("tasks")) {
            //fetching the data from the local Storage
            setTtodos(JSON.parse(localStorage.getItem("tasks")));
        }
    }, []);


    //function for deleting the data from list even from the localStorage
    const clearData = (id) => {
      let delTodo = todos.filter(t=>t.id !== id);
      //updating the list by using hook
      setTtodos(delTodo);

      //also need to update data into localStorage
      saveData(delTodo);
    }
    return (
        <div className='container'>
            <h1 className='text-center display-3'>Todo List in Reactjs</h1>
            <hr />
            <input type="text" value={newTodo} className='form-control' onChange={(e) => setNewTodo(e.target.value)} />
            <br />
            <button onClick={() => Addtodo()}>Save Task</button>
            <br />
            <hr />
            <table className='table table-bordered'>
                <tr>
                    <th>Task Detail</th>
                    <th>Delete Task</th>
                </tr>
                {
                    todos.map((work) => (
                        <tr>
                            <td>{work.todo}</td>
                            <td><button onClick={() => clearData(work.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default Todolist