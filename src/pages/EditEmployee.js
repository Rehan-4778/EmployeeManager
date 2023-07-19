import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import CustomButton from '../components/CutomButton'
import InputField from '../components/InputField'
import useEmployeesContext from '../hooks/use-employees-context'
import swal from 'sweetalert'
function EditEmployee({ handleNextPage, editData }) {

    const { id, firstName, lastName, email, salary, date } = editData;
    const { editEmployee } = useEmployeesContext();


    const [employee, setEmployee] = useState({
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        salary: salary,
        date: date
    })

    const handleEmployeeChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setEmployee({ firstName: '', lastName: '', email: '', salary: '', date: '' })
        handleNextPage('dashboard');
    }

    const handleUpdateEmployee = (e) => {
        e.preventDefault();

        if (employee.firstName.trim() === '' ||
            employee.lastName.trim() === '' ||
            employee.email.trim() === '' ||
            employee.salary.trim() === '' ||
            employee.date.trim() === ''
        ) {
            swal("Please fill all the fields.", "", "warning", { timer: 2000 });
            return;
        }

        editEmployee(employee);
        swal("Employee Updated Successfully", "", "success", { timer: 2000 });
        setEmployee({ firstName: '', lastName: '', email: '', salary: '', date: '' })
        handleNextPage('dashboard');
    }

    return (
        <div className='container row mt-3'>
            <div className='offset-lg-3 offset-md-2 col-lg-8 col-md-10 col-12'>
                <h3>Add Employee</h3>
            </div>

            <Form className='offset-lg-3 offset-md-2 col-lg-8 col-md-10 col-12'>
                <InputField
                    label='First Name'
                    type='text'
                    id='firstName'
                    value={employee.firstName}
                    onChange={handleEmployeeChange}
                />
                <InputField
                    label='Last Name'
                    type='text'
                    id='lastName'
                    value={employee.lastName}
                    onChange={handleEmployeeChange}
                />
                <InputField
                    label='Email'
                    type='email'
                    id='email'
                    value={employee.email}
                    onChange={handleEmployeeChange}
                />
                <InputField
                    label='Salary'
                    type='number'
                    id='salary'
                    value={employee.salary}
                    onChange={handleEmployeeChange}
                />
                <InputField
                    label='Date'
                    type='date'
                    id='date'
                    value={employee.date}
                    onChange={handleEmployeeChange}
                />

                <div className='d-flex mt-4 gap-3'>
                    <CustomButton
                        variant='primary'
                        size='md'
                        onClick={handleUpdateEmployee}
                    >
                        Update
                    </CustomButton>
                    <CustomButton
                        variant='outline-dark'
                        size='md'
                        onClick={handleCancel}
                    >
                        Cancel
                    </CustomButton>

                </div>

            </Form >



        </div >
    )
}

export default EditEmployee
