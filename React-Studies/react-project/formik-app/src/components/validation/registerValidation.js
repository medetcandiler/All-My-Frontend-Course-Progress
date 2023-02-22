import { object, string, ref } from 'yup';
const registerValidation = object({
    fullName: string().min(5, 'Your full name must be at least 5 characters').required('Please enter a value'),
    email: string().email('Please enter a valid email').required('Please enter a value'),
    emailConfirm: string().oneOf([ref('email')], 'Email addresses do not match. ').required('Please enter a value'),
    password: string().min(5, 'Your password must be at least 5 characters').required('Please enter a value'),
    passwordConfirm: string().oneOf([ref('password')], 'Passwords do not match').required('Please enter a value')

})

export default registerValidation;