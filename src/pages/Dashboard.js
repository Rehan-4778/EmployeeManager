import React, { useState, useEffect } from 'react'
import CustomButton from '../components/CutomButton'
import List from '../components/List'
import useEmployeesContext from '../hooks/use-employees-context'
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import swal from 'sweetalert';

function Dashboard({ handlePageChange }) {

    const { employees, fetchEmployees, deleteEmployee } = useEmployeesContext();
    const [editData, setEditData] = useState({});
    const [nextPage, setNextPage] = useState('');

    useEffect(() => {
        fetchEmployees();
        // eslint-disable-next-line 
    }, [])

    const handleNextPage = (page) => {
        setNextPage(page);
    }
    const handleEditEmployee = (employee) => {
        setEditData(employee);
        setNextPage('editEmployee')
    }

    const handleDeleteEmployee = (id) => {
        deleteEmployee(id);
    }

    const handleLogout = () => {
        // prompt user to confirm logout action
        swal({ title: "Are you sure?", text: "Once logged out, you will have to login again to access the dashboard.", icon: "warning", buttons: true, dangerMode: true, })
            .then((willLogout) => {
                if (willLogout) {
                    swal("You have been logged out!", { icon: "success", timer: 2000, });
                    handlePageChange('login');
                }
            });

    }

    if (nextPage === 'addEmployee')
        return <AddEmployee handleNextPage={handleNextPage} />
    else if (nextPage === 'editEmployee')
        return <EditEmployee handleNextPage={handleNextPage} editData={editData} />
    else
        return (
            <div className='container'>
                <h3 className='mt-3'>Employee Management System</h3>

                <div className='d-flex mt-2 gap-3'>
                    <div>
                        <CustomButton varient='primary' size='md' onClick={() => setNextPage('addEmployee')}>
                            Add Employee
                        </CustomButton>
                    </div>
                    <div>
                        <CustomButton variant="outline-dark" size='md' onClick={handleLogout}>
                            Logout
                        </CustomButton>
                    </div>
                </div>

                <List data={employees} handleDeleteEmployee={handleDeleteEmployee} handleEditEmployee={handleEditEmployee} />

            </div >
        )
}

export default Dashboard
