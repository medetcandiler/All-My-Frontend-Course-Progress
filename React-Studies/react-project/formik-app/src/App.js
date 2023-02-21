import './App.css';
import { Formik } from 'formik';



// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//         errors.firstName = 'Must be 15 characters or less';
//     }

//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     } else if (values.lastName.length > 20) {
//         errors.lastName = 'Must be 20 characters or less';
//     }

//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }

//     return errors;
// };


function App() {
    return (
        <div className="App">
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: 'medet',
                    lastName: 'diler',
                    email: 'medet@diler.com',
                    gender: 'male',
                    hobies: [],
                    country: 'turkey'
                }}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {({ values, handleSubmit, handleChange }) => (
                    <form action="#" onSubmit={handleSubmit}>
                        <label htmlFor="firstName">First Name:</label>
                        <input name="firstName" value={values.firstName} onChange={handleChange}/>

                        <br /><br />

                        <label htmlFor="lastName">Last Name:</label>
                        <input name="lastName" value={values.lastName} onChange={handleChange}/>

                        <br /><br />

                        <label htmlFor="email">Email:</label>
                        <input name='email' value={values.email} onChange={handleChange} />

                        <br /><br />

                        <div>
                            Male:
                            <input type="radio" name="gender" value='male' onChange={handleChange} checked={values.gender === 'male'} />
                        </div>
                        <div>
                            Female:
                            <input type="radio" name="gender" value='female' onChange={handleChange} />
                        </div>

                        <br /><br />

                        <select name="country" onChange={handleChange}>
                            <option value="england">England</option>
                            <option value="turkey">Turkey</option>
                            <option value="canada">Canada</option>
                        </select>

                        <br /><br />

                        <div>
                            Basketball
                            <input type="checkbox" name="hobies" value='basketball' onChange={handleChange}/>
                        </div>
                        <div>
                            Football
                            <input type="checkbox" name="hobies" value='football' onChange={handleChange} />
                        </div>
                        <div>
                            Skiing
                            <input type="checkbox" name="hobies" value='skiing' onChange={handleChange}/>
                        </div>

                        <br /><br />

                        <input type="submit" value="Submit" />
                    </form>
                )}

            </Formik>
        </div>
    )
}


export default App;
