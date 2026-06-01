import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./Action";

function Todo() {

    // useState -> stores input value
    const [text, setText] = useState("");

    // useSelector -> gets data from redux store
    const todos = useSelector((state) => state.todos);

    // useDispatch -> sends action to reducer
    const dispatch = useDispatch();

    // function to add todo
    const handleAdd = () => {

        // dispatch action
        dispatch(addTodo(text));

        // clear input box
        setText("");
    };

    return (
        <div>
            <h1>Todo App</h1>


            {/* Input box */}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            {/* Button */}
            <button onClick={handleAdd}>Add</button>

            {/* Display todos */}
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>

        </div>
    );
}

export default Todo;