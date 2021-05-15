import React, { useState } from 'react';
import SignInForm from '../components/LoginComponents/SignInForm';
import SignUpForm from '../components/LoginComponents/SignUpForm';

const defaultInput = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
};

const login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [input, setInput] = useState(defaultInput);

  //Toggle isSignUp state, so does components
  const handleSignUpOnClick = () => {
    setIsSignUp(!isSignUp);
    setInput(defaultInput);
  };

  // Handle form input change event.
  const handleInputOnChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle Sign In / Sign Up submit event.
  const handleSignSubmit = e => {
    e.preventDefault();

    setInput(defaultInput);
    console.log(input);
  };

  return (
    <div>
      {isSignUp ? (
        <SignUpForm
          handleSignUpOnClick={handleSignUpOnClick}
          handleInputOnChange={handleInputOnChange}
          handleSignSubmit={handleSignSubmit}
          input={input}
        />
      ) : (
        <SignInForm
          handleSignUpOnClick={handleSignUpOnClick}
          handleInputOnChange={handleInputOnChange}
          handleSignSubmit={handleSignSubmit}
          input={input}
        />
      )}
    </div>
  );
};

export default login;
