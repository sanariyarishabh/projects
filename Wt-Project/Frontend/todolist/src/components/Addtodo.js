import React, { useState } from 'react';

export default function Addtodo({ onTodoAdded }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:4000/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setName('');
            setDescription('');
            onTodoAdded();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="container mt-5">
            <div className="card shadow-lg">
                <div className="card-header bg-primary text-white text-center">
                    <h3>Add New Todo</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" id="description" />
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-success mt-3 px-5">Add Todo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
