import React from 'react'
import Form from 'react-bootstrap/Form'

function InputField({
    label,
    type,
    id,
    placeholder,
    value,
    ...rest
}) {
    return (
        <div>
            <Form.Label className='mt-3' htmlFor={id}>{label}</Form.Label>
            <Form.Control
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                {...rest}
                autoComplete={type === 'password' ? 'true' : 'false'}
            />
        </div>
    )
}

export default InputField
