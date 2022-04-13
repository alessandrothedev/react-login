import './App.css';
import {useState} from 'react'

function App() {

    const initialValues = { 
        name: '', 
        email: '', 
        password: '' 
    }

    const [formValues, setFormValues] = useState(initialValues)
    const [form, setForm] = useState(true)
    const [message, setMessage] = useState(false)
    const [errors, setErrors] = useState({})
    const [isValidated, setIsValidated] = useState(false)

    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm(false)
        setMessage(true)
        setErrors(handleValidation(formValues))
    }

    const handleLogOut = () => {
        setForm(true)
        setMessage(false)
        setFormValues(initialValues)
    }

    const handleValidation = (values) => {
        const formErrors = {}

        if(!values.name) {
            formErrors.name = 'Name required!'
            setIsValidated(true)
        }
        if(!values.email) {
            formErrors.email = 'An email address is required to log in!'
            setIsValidated(true)
        }
        if(!values.password) {
            formErrors.password = 'Password is required!'
            setIsValidated(true)
        }

        return formErrors;
    }

  return (
    <div className="App">
        {form && <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input 
                type="text" 
                name="name" 
                id='name' 
                value={formValues.name} 
                onChange={handleInput} 
                // required 
            /><br/>
            {isValidated && <p>{errors.name}</p>}

            <label htmlFor='email'>Email:</label>
            <input 
                type="email" 
                name="email" 
                id='email' 
                value={formValues.email} 
                onChange={handleInput} 
                // required 
            /><br/>
            {isValidated && <p>{errors.email}</p>}

            <label htmlFor='password'>Password:</label>
            <input 
                type="password" 
                name="password" 
                id='password' 
                value={formValues.password} 
                onChange={handleInput} 
                // required 
            /><br/>
           {isValidated && <p>{errors.password}</p>}

            <input type="submit" value="Submit" />
        </form>
        }

        {message && <>
            <h2> {formValues.name}, You are now logged in!</h2>
            <button onClick={handleLogOut}>Log Out</button>
        </>}
    </div>
  );
}

export default App;
