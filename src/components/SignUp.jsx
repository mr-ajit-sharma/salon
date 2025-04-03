import React, { useState } from 'react';
import useAuthStore from '../zustand/store'; // Adjust path as needed

const SignUp = () => {
  // Use a single form state object
  const [formData, setFormData] = useState({
    fullname: '',
    number: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [validationError, setValidationError] = useState('');
  
  // Get authentication states and functions from Zustand store
  const { signup, error: storeError, isLoading, isAuthenticated } = useAuthStore();
  
  // Destructure for easier access in JSX
  const { fullname, number, email, password, confirmPassword } = formData;

  // Single handler for all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError('');
    }
  };
  
  // Form validation function
  const validateForm = () => {
    if (password !== confirmPassword) {
      setValidationError("Passwords do not match");
      return false;
    }
    
    if (!email.includes('@')) {
      setValidationError("Please enter a valid email");
      return false;
    }
    
    return true;
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
    
    // Reset validation error
    setValidationError('');
    
    // Validate form
    if (!validateForm()) return;

    try {
      // Hard-code the role to 2 (You can change it as needed)
      const userData = {
        name: fullname,
        email: email,
        password: password,
        number: parseInt(number, 10),
        role: 2 // Hard-coded role here
      };
      
      // Use the Zustand store's signup function
      await signup(userData);
      
      // Reset form if successful
      if (isAuthenticated) {
        setFormData({
          fullname: '',
          number: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }
      
    } catch (error) {
      // The store will handle setting the error state
      console.error("Registration error:", error);
    }
  };

  // Define input fields configuration for DRY code
  const inputFields = [
    {
      type: "text",
      name: "fullname",
      value: fullname,
      placeholder: "Enter your fullname",
      required: true
    },
    {
      type: "tel",
      name: "number",
      value: number,
      placeholder: "Enter your phone number",
      required: true
    },
    {
      type: "email",
      name: "email",
      value: email,
      placeholder: "Enter your email",
      required: true
    },
    {
      type: "password",
      name: "password",
      value: password,
      placeholder: "Enter your password",
      required: true
    },
    {
      type: "password",
      name: "confirmPassword",
      value: confirmPassword,
      placeholder: "Confirm your password",
      required: true
    }
  ];
  
  return (
    <div className='log-main'>
      <div className='log h-75'>
        <h1>SignUp</h1>
        
        {isAuthenticated && (
          <div className='success-message'>
            Registration successful! You are now logged in.
          </div>
        )}
        
        <form className='form h-60' onSubmit={submitHandler}>
          {(validationError || storeError) && (
            <p className='error'>{validationError || storeError}</p>
          )}
          
          {/* Map through input fields configuration */}
          {inputFields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              className='input'
              value={field.value}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
            />
          ))}
          
          <button 
            type='submit' 
            className='button' 
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
