import React, { useState } from 'react'
import InputField from '../components/InputField';
import Form from 'react-bootstrap/Form';
import CustomButton from '../components/CutomButton';
import { loginAuth } from '../middlewares/loginAuth';
import swal from 'sweetalert';

function Login({ handlePageChange }) {

    const [creds, setCreds] = useState({
        email: '',
        password: '',
    });

    const handleCredentials = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (creds.email.trim() === '' || creds.password.trim() === '') {
            swal("Please fill all the fields.", "", "warning", { timer: 2000 });
            return;
        }

        const response = await loginAuth(creds);

        if (response) {
            swal("Login Successful", "", "success", { timer: 2000 });
            setCreds({ email: '', password: '' });
            handlePageChange('dashboard');
        }
    }


    return (
        <div className='container py-3 w-50'>
            <h3>Admin Login</h3>

            <Form>
                <InputField
                    label='Email'
                    type='email'
                    id='email'
                    placeholder='Enter Email'
                    value={creds.email}
                    onChange={handleCredentials}
                />

                <InputField
                    label='Password'
                    type='password'
                    id='password'
                    placeholder='Enter Password'
                    value={creds.password}
                    onChange={handleCredentials}
                />

                <div className='mt-3'>
                    <CustomButton variant='primary' size='md' onClick={handleSubmit} >
                        Login
                    </CustomButton>
                </div>
            </Form>
        </div>

    )
}

export default Login
