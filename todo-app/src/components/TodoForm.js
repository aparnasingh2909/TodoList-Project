import { useState } from 'react';
import { Button } from 'reactstrap';

function TodoForm({ addTask }) {
    const [input, setInput] = useState([]);

    const handleSubmit = (e) => {
        // to prevent the default form submission behavior (which would reload the page)
        //so that page does not reload
        e.preventDefault();

        //to remove whitespaces from the input
        if (input.trim()) {
            addTask(input);
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            {/* onChange event handler captures the new value in e.target.value (the current text inside the input box) */}
            {/* setInput(e.target.value) updates the input state with the new value. This causes the component to re-render with the updated input */}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task" className='mx-4' style={{fontSize:24}}
            />
            <Button type="submit" color="success" style={{fontSize:22}}>Add</Button>
        </form>
    );
}

export default TodoForm;
