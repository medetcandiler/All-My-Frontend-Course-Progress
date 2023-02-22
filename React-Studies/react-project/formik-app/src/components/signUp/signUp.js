import { useFormik } from 'formik';

import fbLogo from '../../assests/images/fb.png';
import gpLogo from '../../assests/images/gp.png';
import twLogo from '../../assests/images/tw.png';
import loginValidation from '../validation/loginValidation';

function SignUp() {

    const { handleChange, values, handleSubmit, errors, handleBlur, touched, resetForm } = useFormik({
        initialValues: {
            email: "",
            password: "",
            checkbox: []
        },
        onSubmit: (values, { resetForm }) => {
            setTimeout(alert(JSON.stringify(values, null, 2)), 500);
            resetForm()
        },
        validationSchema: loginValidation
    });

    return (
        <>

            <div className="icon-btn">
                <img src={fbLogo} alt="facebook" />
                <img src={gpLogo} alt="google" />
                <img src={twLogo} alt="twitter" />
            </div>
            <form id='login' className='input-group' autoComplete='off' onSubmit={handleSubmit}>
                <input name="email"
                    value={values.email}
                    id='name'
                    className='input-item'
                    placeholder='Email Address'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.email && touched.email && <div className='error'>{errors.email}</div>}

                <input
                    type="password"
                    name="password"
                    value={values.password}
                    className='input-item'
                    placeholder='Password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.password && touched.password && <div className='error'>{errors.password}</div>}

                <div>
                    <input
                        type="checkbox"
                        name="checkbox"
                        className="check-box"
                        value='User wantted to change or reset password'
                        onChange={handleChange}
                    />
                    <i style={{ fontWeight: 'lighter' }}>Change or Reset Password</i>
                </div>



                <input type="submit" value="Log In" className='sbmt-btn' />

            </form>
        </>
    );
}

export default SignUp;
