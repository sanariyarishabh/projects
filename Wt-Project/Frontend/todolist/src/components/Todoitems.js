import React from 'react';

export default function Todoitems({ id, name, description, complete }) {
    const handleComplete = (id) => {
        fetch("http://localhost:4000/update/" + id, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(err => console.log(err));
    }

    const handleDelete = (id) => {
        fetch("http://localhost:4000/delete/" + id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log('Deleted:', data);
        })
        .catch(err => console.log(err));
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className={complete ? "text-decoration-line-through" : ""}>
                <h5 className="mb-1">{name}</h5>
                <p className="mb-1">{description}</p>
            </div>
            <div>
                {!complete && (
                    <button onClick={() => handleComplete(id)} className="btn btn-success me-2">Complete</button>
                )}
                <button onClick={() => handleDelete(id)} className="btn btn-danger">Delete</button>
            </div>
        </li>
    )
}
