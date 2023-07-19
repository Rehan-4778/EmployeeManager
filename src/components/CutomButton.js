import Button from 'react-bootstrap/Button';

function CustomButton({ children, variant, size, ...rest }) {
    return (
        <Button variant={variant} size={size} {...rest}>
            {children}
        </Button>
    )
}

export default CustomButton
