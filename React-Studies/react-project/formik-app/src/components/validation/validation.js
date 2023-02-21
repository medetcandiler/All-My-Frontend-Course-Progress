import { object, string, number, date, InferType, ref } from 'yup';


const validation = object({
    email: string().email('please enter a valid email').required('the field have to be filled'),
    password: string().min(5, 'you have got to write at least 5 character').required('the field have to be filled'),
    passwordConfirm: string().oneOf([ref('password')], 'you need to write same as password ').required('the field have to be filled')
})

export default validation