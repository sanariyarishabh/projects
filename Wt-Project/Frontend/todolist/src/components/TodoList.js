import React, { useEffect, useState } from 'react';
import Todoitems from './Todoitems';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setTodos(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <section className='bg-zinc-700 rounded-md mt-4 w-full'>
            <ul className='grid grid-cols-1 rounded-md'>
                {todos.length > 0 ? (
                    todos.map((todo, i) => (
                        <Todoitems key={i} id={todo._id} name={todo.name} description={todo.description} complete={todo.complete} />
                    ))
                ) : (
                    <p className='text-white text-center p-4'>There is no Todo right now</p>
                )}
            </ul>
        </section>
    );
}
