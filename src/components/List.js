import React from 'react'
import Table from 'react-bootstrap/Table';
import ListItem from './ListItem';

function List({ data, handleDeleteEmployee, handleEditEmployee }) {

    const renderedList = data.map((item, index) => {
        return <ListItem key={item.id} index={index} item={item} onDelete={handleDeleteEmployee} onEdit={handleEditEmployee} />
    })

    return (
        <div className='mt-4'>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedList}
                </tbody>
            </Table>
        </div>
    )
}

export default List
