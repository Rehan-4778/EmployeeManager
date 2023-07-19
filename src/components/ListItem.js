import React from 'react'
import swal from 'sweetalert';

function ListItem({ index, item, onDelete, onEdit }) {

    const { id, firstName, lastName, email, salary, date } = item;

    const handleDelete = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this employee!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((value) => {
                if (value === 'delete') {
                    onDelete(id);
                }
            });


    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{salary}</td>
            <td>{date}</td>

            <td>
                <button className='btn btn-sm btn-secondary' onClick={() => onEdit(item)}>Edit</button>
                <button className='btn btn-sm btn-danger mx-2' onClick={handleDelete}>Delete</button>
            </td>



        </tr>
    )
}

export default ListItem
