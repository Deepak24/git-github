import React, {useState} from "react";
const Myform = () => {

    const [formData, setFormData] = useState({
            username: '',
            email: '', 
            password: ''
        });
    const [errors, setErrors] = useState({});//Set default

    //handling the integration for input field
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

    //Handling the submit form integation
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if(Object.keys(validationErrors).length === 0) {
            console.log(e);
            console.log('Form Data ', formData);
            setErrors({});
        } else {
            setErrors(validationErrors);
        }

    }

    //Form validation
    const validateForm = (data) => {
        const errors = {};
        if(!data.username) {//Name validation
            errors.username = 'Name is required.';
        }

        if(!data.password) {//Password validation
            errors.password = 'Password is required.';
        }

        if(!data.email) {
            errors.email = 'Email is required.';
        } else if(!isValidEmail(data.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    //Email validation logic
    const isValidEmail = (email) => {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <label htmlFor="username" >Enter username</label>
                    <input type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} />
                    {errors.username && <span className="error" >{errors.username}</span> }
                </div>
                <div className="inputDiv">
                    <label htmlFor="email" >Enter email</label>
                    <input type="text" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} />
                    {errors.email && <span className="error" >{errors.email}</span> }
                </div>
                <div className="inputDiv">
                    <label htmlFor="password" >Enter password</label>
                    <input type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} />
                    {errors.password && <span className="error" >{errors.password}</span> }
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default Myform;