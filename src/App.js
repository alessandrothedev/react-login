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

    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
        console.log(formValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setForm(false)
        setMessage(true)
    }

    const handleLogOut = () => {
        setForm(true)
        setMessage(false)
        setFormValues(initialValues)
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
                required 
            /><br/>

            <label htmlFor='email'>Email:</label>
            <input 
                type="email" 
                name="email" 
                id='email' 
                value={formValues.email} 
                onChange={handleInput} 
                required 
            /><br/>

            <label htmlFor='password'>Password:</label>
            <input 
                type="password" 
                name="password" 
                id='password' 
                value={formValues.password} 
                onChange={handleInput} 
                required 
            /><br/>

            <input type="submit" value="Submit" />
        </form>
        }

        {message && <>
            <h2>You are now logged in!</h2>
            <button onClick={handleLogOut}>Log Out</button>
        </>}
    </div>
  );
}

export default App;
