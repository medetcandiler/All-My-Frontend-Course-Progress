import React from 'react';
import { useFormik } from 'formik';
import fbLogo from '../../assests/images/fb.png';
import gpLogo from '../../assests/images/gp.png';
import twLogo from '../../assests/images/tw.png';
import registerValidation from '../validation/registerValidation'

function Login() {
    const { handleChange, handleBlur, handleSubmit, values, errors, touched, resetForm } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            emailConfirm: '',
            password: '',
            passwordConfirm: '',
            terms: []
        },
        onSubmit: (values, { resetForm }) => {
            setTimeout(alert(JSON.stringify(values, null, 2)), 500)
        },
        validationSchema: registerValidation
    })

    return (
        <>
            <div className="icon-btn">
                <img src={fbLogo} alt="facebook" />
                <img src={gpLogo} alt="google" />
                <img src={twLogo} alt="twitter" />
            </div>
            <form id='login' className='input-group' autoComplete='off' onSubmit={handleSubmit}>
                <input
                    name="fullName"
                    value={values.fullName}
                    id='name'
                    className='input-item'
                    placeholder='Full Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.fullName && touched.fullName && <div className='error'>{errors.fullName}</div>}

                <input
                    name="email"
                    value={values.email}
                    className='input-item'
                    placeholder='Email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.email && touched.email && <div className='error'>{errors.email}</div>}

                <input
                    name='emailConfirm'
                    className='input-item'
                    placeholder='Confirm Email'
                    value={values.emailConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.emailConfirm && touched.emailConfirm && <div className='error' >{errors.emailConfirm}</div>}

                <input 
                    type='password'
                    name='password'
                    className='input-item'
                    placeholder='Password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />

                {errors.password && touched.password && <div className='error'>{errors.password}</div>}

                <input 
                    type='password'
                    name='passwordConfirm'
                    className='input-item'
                    placeholder='Password Confirm'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirm}
                />

                {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}

                <div>
                    <input
                        type="checkbox"
                        name="terms"
                        className="check-box"
                        value='User accepted the terms'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <i style={{ fontWeight: 'lighter' }}>I agree the terms and conditions</i>
                </div>
                
                {errors.terms && touched.terms && <div className='error'>{errors.terms}</div>}

                <input type="submit" value="Log In" className='sbmt-btn' />

            </form>
        </>
    )
}

export default Login;
