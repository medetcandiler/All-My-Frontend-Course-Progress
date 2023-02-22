import { object, string } from 'yup';


const loginValidation = object({
    email: string().email('Please enter a valid email').required('Please enter a value'),
    password: string().min(5, 'Your password must be at least 5 characters').required('Please enter a value'),
})

export default loginValidation

