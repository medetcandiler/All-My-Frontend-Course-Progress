import { useFormik } from 'formik';
import validationSchema from '../validation/validation';

function SignUp() {

    const { handleChange, values, handleSubmit, errors, handleBlur, touched, resetForm } = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        onSubmit: (values , {resetForm}) => {
            console.log(values);
            resetForm()
        },
        validationSchema
    });

    return (
        <>
            <h1>Sign Up</h1>
            <form action="#" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.email && touched.email && <div className='error'>{errors.email}</div>}

                <br />
                <br />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.password && touched.password && <div className='error'>{errors.password}</div>}

                <br />
                <br />

                <label htmlFor="passwordConfirm">Password Confirm:</label>
                <input
                    type="password"
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}
                <br />
                <br />

                <input type="submit" value="Submit" />

                <br />
                <br />
            </form>
        </>
    );
}

export default SignUp;
